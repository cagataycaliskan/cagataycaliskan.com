import { getRequestConfig } from "next-intl/server";

const locales = ["en", "tr"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = "en"; // fallback to default locale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});