'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { experienceData, type Experience } from '@/lib/constants';
import { Card } from '@/components/ui/Card';

interface ExperienceProps {
  translations?: {
    personal: {
      experienceYears: string;
      experienceLabel: string;
      companiesCount: string;
      companiesLabel: string;
    };
  };
}

export default function Experience({ translations }: ExperienceProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const calculateDuration = (startDate: Date, endDate: Date | "Present"): string => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    const monthText = months === 1 ? t('common.month') : t('common.months');
    const yearText = t('common.year');
    
    if (months < 12) {
      return `${months} ${monthText}`;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
      return `${years} ${yearText}`;
    }
    
    const remainingMonthText = remainingMonths === 1 ? t('common.month') : t('common.months');
    return `${years} ${yearText} ${remainingMonths} ${remainingMonthText}`;
  };

  const formatDate = (date: Date | "Present"): string => {
    if (date === "Present") return t('common.present');
    
    const localeCode = locale === 'tr' ? 'tr-TR' : 'en-US';
    
    return new Date(date).toLocaleDateString(localeCode, { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="sr-only">Professional Experience</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Interactive Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-primary rounded-full shadow-lg hidden md:block overflow-hidden">
          <motion.div
            className="w-full bg-gradient-secondary opacity-0"
            animate={{
              height: selectedExperience ? "100%" : "0%",
              opacity: selectedExperience ? 0.8 : 0
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              onHoverStart={() => !isMobile && setSelectedExperience(experience)}
              onHoverEnd={() => !isMobile && setSelectedExperience(null)}
            >
              {/* Interactive Timeline dot */}
              <motion.div
                className="absolute left-5 top-6 w-6 h-6 rounded-full shadow-xl hidden md:block border-3 border-white dark:border-gray-900 z-20 cursor-pointer"
                initial={false}
                animate={{
                  scale: selectedExperience === experience ? 1.3 : 1,
                  background: selectedExperience === experience 
                    ? "linear-gradient(135deg, #0ea5e9, #0284c7, #06b6d4)"
                    : "linear-gradient(135deg, #0ea5e9, #0284c7)",
                  boxShadow: selectedExperience === experience 
                    ? "0 0 25px rgba(14, 165, 233, 0.6), 0 0 50px rgba(2, 132, 199, 0.4)"
                    : "0 4px 15px rgba(14, 165, 233, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(2, 132, 199, 0.3)"
                }}
                onClick={() => setSelectedExperience(selectedExperience === experience ? null : experience)}
              />
              
              <Card className="ml-0 md:ml-16 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Company Logo Placeholder */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">
                              {experience.company.charAt(0)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-blue-400 transition-colors mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-lg text-brand-primary dark:text-blue-400 font-semibold mb-2">
                            {experience.company}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                            <span>•</span>
                            <span className="font-medium text-brand-primary dark:text-blue-400">{calculateDuration(experience.startDate, experience.endDate)}</span>
                            {experience.location && (
                              <>
                                <span>•</span>
                                <span>{experience.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-brand-primary dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        initial={{ height: isMobile ? "auto" : 0, opacity: isMobile ? 1 : 0 }}
                        animate={{
                          height: (isMobile || selectedExperience === experience) ? "auto" : 0,
                          opacity: (isMobile || selectedExperience === experience) ? 1 : 0
                        }}
                        transition={{ duration: isMobile ? 0 : 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="pt-6 border-t border-blue-200 dark:border-blue-700"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-gradient-secondary rounded-full animate-pulse" />
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg bg-gradient-secondary bg-clip-text text-transparent">
                              {t('keyAchievements')}
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <motion.li 
                                key={achievementIndex} 
                                className="text-gray-600 dark:text-gray-400 flex items-start gap-4 group pl-2"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + achievementIndex * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform ml-1" />
                                <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors flex-1">
                                  {t(achievement)}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}