import ContactPage from "../../../components/Contact/ContactPage";
import fs from "fs";
import path from "path";

interface Props {
  params: {
    lang: string;
  };
}

async function loadTranslations(lang: string) {
  const translationsPath = path.join(
    process.cwd(),
    "public",
    "locales",
    `${lang}.json`
  );
  const translations = JSON.parse(fs.readFileSync(translationsPath, "utf-8"));
  return translations;
}

export default async function Page({ params }: Props) {
  const translations = await loadTranslations(params.lang);
  return <ContactPage lang={params.lang} translations={translations} />;
}
