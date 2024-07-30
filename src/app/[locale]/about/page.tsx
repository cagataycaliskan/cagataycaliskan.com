import AboutPage from "../../../components/About/AboutPage";
import React from "react";
import { useTranslations } from "next-intl";

function page() {
  const t = useTranslations();

  const translations = {
    myCertificates: t("myCertificates"),
  };

  return <AboutPage translations={translations} />;
}

export default page;
