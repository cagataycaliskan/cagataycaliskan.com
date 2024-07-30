FROM node:20-alpine AS deps

WORKDIR /src
COPY package*.json .
RUN npm install

# ------------------------------

FROM node:20-alpine AS builder
WORKDIR /src
COPY --from=deps /app/node_modules ./node_modules
COPY public ./public
COPY src ./src
COPY messages ./messages
COPY components ./components
COPY package.json next.config.mjs postcss.config.mjs tailwind.config.ts ./
RUN npm run build

# ------------------------------

FROM node:20-alpine
WORKDIR /src
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]