import HomePage from "../../components/Home/HomePage";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  const translations = {
    welcomeUC: t("welcomeUC"),
    welcomeText: t("welcomeText"),
    technologiesIUse: t("technologiesIUse"),
  };

  return (
    <>
      <HomePage translations={translations} />
    </>
  );
}
