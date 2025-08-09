"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import TechStack from "@/components/sections/TechStack";
import ProfileCard from "@/components/sections/ProfileCard";

interface HomePageProps {
  translations: {
    welcomeUC: string;
    welcomeText: string;
    technologiesIUse: string;
    experience: string;
    projects: string;
    certificates: string;
    techStack: string;
    personal: {
      fullName: string;
      jobTitle: string;
      experienceYears: string;
      experienceLabel: string;
      companiesCount: string;
      companiesLabel: string;
    };
    filters: {
      all: string;
      personal: string;
      work: string;
    };
    categories?: {
      personal: string;
      work: string;
      enterprise: string;
      sideProject: string;
    };
    projectDetails?: {
      portfolioWebsite?: {
        title: string;
        description: string;
      };
      buttons?: {
        viewCode: string;
        liveDemo: string;
        code: string;
        live: string;
      };
      status?: {
        completed: string;
        inProgress: string;
        comingSoon: string;
      };
      technologiesUsed?: string;
      featured?: string;
      more?: string;
    };
  };
}

const HomePage: React.FC<HomePageProps> = ({ translations }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 1200);
    
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1200);


    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="container flex justify-center items-start pt-8 px-4">
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="animated-text flex justify-center items-center absolute inset-0 z-10"
              initial={{ y: "0vh", opacity: 1 }}
              animate={{ y: "-10vh", opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="font-medium text-center text-3xl sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {translations?.welcomeUC}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ y: "40vh", opacity: 0 }}
          animate={{ y: "0vh", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Hero Layout - Desktop: Side by side, Mobile: Stacked */}
          <div className="lg:flex lg:gap-8 mb-12 lg:items-start">
            {/* Left Side - Profile Card - Fixed Position */}
            <div className="lg:w-1/3 lg:flex-shrink-0">
              <ProfileCard translations={{ 
                personal: translations.personal,
                welcomeText: translations.welcomeText 
              }} />
            </div>

            {/* Right Side - Main Content Tabs - Independent */}
            <div className="lg:w-2/3 min-w-0">
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="w-full max-w-full"
                  >
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      {/* Tabs Navigation - Fixed Position */}
                      <div className="sticky top-0 z-10 pb-4 mb-4">
                        <TabsList variant="pills" className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
                          <TabsTrigger value="experience" variant="pills" className="text-sm group hover:scale-105 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center gap-2 group-hover:text-blue-500 group-data-[state=active]:group-hover:text-white transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                              </svg>
                              {translations.experience}
                            </div>
                          </TabsTrigger>
                          <TabsTrigger value="projects" variant="pills" className="text-sm group hover:scale-105 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center gap-2 group-hover:text-purple-500 group-data-[state=active]:group-hover:text-white transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                              {translations.projects}
                            </div>
                          </TabsTrigger>
                          <TabsTrigger value="certificates" variant="pills" className="text-sm group hover:scale-105 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center gap-2 group-hover:text-green-500 group-data-[state=active]:group-hover:text-white transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              {translations.certificates}
                            </div>
                          </TabsTrigger>
                          <TabsTrigger value="tech-stack" variant="pills" className="text-sm group hover:scale-105 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center gap-2 group-hover:text-orange-500 group-data-[state=active]:group-hover:text-white transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              {translations.techStack}
                            </div>
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      
                      {/* Tab Content */}
                      <div className="min-h-[600px] w-full overflow-visible">
                        <TabsContent value="experience" className="w-full">
                          <Experience translations={{ personal: translations.personal }} />
                        </TabsContent>
                        
                        <TabsContent value="projects" className="w-full">
                          <Projects translations={{
                            filters: translations.filters,
                            categories: translations.categories,
                            projectDetails: translations.projectDetails
                          }} />
                        </TabsContent>
                        
                        <TabsContent value="certificates" className="w-full">
                          <Certificates />
                        </TabsContent>
                        
                        <TabsContent value="tech-stack" className="w-full">
                          <TechStack />
                        </TabsContent>
                      </div>
                    </Tabs>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
