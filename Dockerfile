FROM node:20-alpine AS deps

WORKDIR /src
COPY package*.json ./
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /src
COPY --from=deps /src/node_modules ./node_modules
COPY public ./public
COPY src ./src
COPY messages ./messages
COPY package.json next.config.mjs postcss.config.mjs tailwind.config.ts ./
RUN npm run build

FROM node:20-alpine
WORKDIR /src
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package.json ./
CMD ["npm", "run", "start"]