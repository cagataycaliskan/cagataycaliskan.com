import HomePage from "../../components/Home/HomePage";
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

export default async function Home({ params }: Props) {
  const translations = await loadTranslations(params.lang);
  return <HomePage lang={params.lang} translations={translations} />;
}
