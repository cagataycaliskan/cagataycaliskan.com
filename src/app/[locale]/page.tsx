import HomePage from "../../components/Home/HomePage";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  const translations = {
    welcomeUC: t("welcomeUC"),
    welcomeText: t("welcomeText"),
    technologiesIUse: t("technologiesIUse") || "Technologies I Use",
    experience: t("experience") || "Experience",
    projects: t("projects") || "Projects", 
    certificates: t("certificates") || "Certificates",
    techStack: t("techStack") || "Tech Stack",
    personal: {
      fullName: t("personal.fullName") || "Çağatay Çalışkan",
      jobTitle: t("personal.jobTitle") || "Front-end Developer",
      experienceYears: t("personal.experienceYears") || "3+",
      experienceLabel: t("personal.experienceLabel") || "Years of Experience",
      companiesCount: t("personal.companiesCount") || "3",
      companiesLabel: t("personal.companiesLabel") || "Companies",
    },
    filters: {
      all: t("filters.all") || "All",
      personal: t("filters.personal") || "Personal",
      work: t("filters.work") || "Work",
    },
    categories: {
      personal: t("categories.personal") || "Personal",
      work: t("categories.work") || "Work",
      enterprise: t("categories.enterprise") || "Enterprise",
      sideProject: t("categories.sideProject") || "Side Project",
    },
    projectDetails: {
      portfolioWebsite: {
        title: t("projectDetails.portfolioWebsite.title") || "Portfolio Website",
        description: t("projectDetails.portfolioWebsite.description") || "Modern, responsive portfolio website built with Next.js 14 and TypeScript",
      },
      buttons: {
        viewCode: t("projectDetails.buttons.viewCode") || "View Code",
        liveDemo: t("projectDetails.buttons.liveDemo") || "Live Demo",
        code: t("projectDetails.buttons.code") || "Code",
        live: t("projectDetails.buttons.live") || "Live",
      },
      status: {
        completed: t("projectDetails.status.completed") || "Completed",
        inProgress: t("projectDetails.status.inProgress") || "In Progress",
        comingSoon: t("projectDetails.status.comingSoon") || "Coming Soon",
      },
      technologiesUsed: t("projectDetails.technologiesUsed") || "Technologies Used:",
      featured: t("projectDetails.featured") || "Featured",
      more: t("projectDetails.more") || "more",
    },
  };

  return <HomePage translations={translations} />;
}
