'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, memo } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { projectsData, type Project } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  translations: {
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

function ProjectModal({ project, onClose, translations }: ProjectModalProps) {
  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={480}
            className="w-full h-96 object-cover rounded-t-xl"
            quality={80}
            sizes="(max-width: 768px) 100vw, 640px"
            loading="lazy"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title === 'Portfolio Website' 
                ? translations.projectDetails?.portfolioWebsite?.title || project.title 
                : project.title}
            </h3>
            {project.status && (
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
              }`}>
                {project.status === 'completed' ? (translations.projectDetails?.status?.completed || 'Completed') :
                 project.status === 'in-progress' ? (translations.projectDetails?.status?.inProgress || 'In Progress') :
                 (translations.projectDetails?.status?.comingSoon || 'Coming Soon')}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.title === 'Portfolio Website' 
              ? translations.projectDetails?.portfolioWebsite?.description || project.description 
              : project.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{translations.projectDetails?.technologiesUsed || 'Technologies Used:'}</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            {project.githubUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex-1"
              >
                {translations.projectDetails?.buttons?.viewCode || 'View Code'}
              </Button>
            )}
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="flex-1"
              >
                {translations.projectDetails?.buttons?.liveDemo || 'Live Demo'}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
  
  return createPortal(modalContent, document.body);
}

interface ProjectsProps {
  translations: {
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

const Projects = memo(function Projects({ translations }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter projects based on activeFilter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => {
        if (activeFilter === 'personal') {
          return p.category === 'Personal' || p.category === 'Side Project';
        } else if (activeFilter === 'work') {
          return p.category === 'Work' || p.category === 'Enterprise';
        }
        return true;
      });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="sr-only">Projects Portfolio</h2>
      {/* Filter Buttons */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {["all", "personal", "work"].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-200"
            >
              {translations.filters[filter as keyof typeof translations.filters]}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              layout
              className="cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="cursor-pointer transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 h-full flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain rounded-t-lg"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                        {translations.projectDetails?.featured || 'Featured'}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title === 'Portfolio Website' 
                      ? translations.projectDetails?.portfolioWebsite?.title || project.title 
                      : project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {project.title === 'Portfolio Website' 
                      ? translations.projectDetails?.portfolioWebsite?.description || project.description 
                      : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3} {translations.projectDetails?.more || 'more'}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {project.category}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            translations={translations}
          />
        )}
      </AnimatePresence>
    </div>
  );
});

export default Projects;