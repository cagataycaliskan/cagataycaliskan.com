'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { techStackData, type TechStack } from '@/lib/constants';

interface SkillItemProps {
  skill: TechStack['items'][0];
  index: number;
}

function SkillItem({ skill, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-102 border border-gray-200/50 dark:border-gray-600/50"
    >
      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

interface TechCategoryProps {
  category: TechStack;
  index: number;
}

function TechCategory({ category, index }: TechCategoryProps) {
  const t = useTranslations();
  
  const getCategoryTranslation = (categoryName: string) => {
    switch (categoryName) {
      case 'Frontend':
        return t('techStackCategories.frontend');
      case 'Tools':
        return t('techStackCategories.tools');
      case 'Learning':
        return t('techStackCategories.learning');
      default:
        return categoryName;
    }
  };
  
  const categoryIcons = {
    Frontend: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4M7 21h10M7 21l-4-4M21 17H3" />
      </svg>
    ),
    Tools: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Learning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    Backend: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  };

  const categoryColors = {
    Frontend: 'from-blue-500 to-purple-500',
    Tools: 'from-purple-500 to-pink-500', 
    Learning: 'from-green-500 to-emerald-500',
    Backend: 'from-orange-500 to-red-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.1 }
      }}
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[category.category]} text-white shadow-lg`}>
          {categoryIcons[category.category]}
        </div>
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            {getCategoryTranslation(category.category)}
          </h3>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3">
        {category.items.map((skill, skillIndex) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full space-y-6">
      <h2 className="sr-only">Technical Skills and Technologies</h2>
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStackData.map((category, index) => (
          <TechCategory
            key={category.category}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}