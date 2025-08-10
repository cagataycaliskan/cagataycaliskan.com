'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { certificatesData, type Certificate } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface CertificateLightboxProps {
  certificate: Certificate;
  onClose: () => void;
}

function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  const lightboxContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          ✕
        </button>
        
        <div className="flex-1 overflow-hidden rounded-lg">
          <Image
            src={certificate.image}
            alt={certificate.title}
            width={800}
            height={600}
            className="w-full h-full object-contain rounded-lg shadow-2xl"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            loading="eager"
          />
        </div>
        
        {/* Mobile: Bottom details panel, Desktop: Side overlay */}
        <div className="mt-4 md:absolute md:bottom-4 md:right-4 md:mt-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-4 rounded-lg shadow-lg md:max-w-sm w-full md:w-auto border border-gray-200/20 dark:border-gray-700/30">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{certificate.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{certificate.issuer} • {certificate.date}</p>
          
          {certificate.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {certificate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-600 text-white rounded text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {certificate.verificationUrl && (
            <Button
              size="sm"
              onClick={() => window.open(certificate.verificationUrl, '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
            >
              Verify Certificate
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
  
  return createPortal(lightboxContent, document.body);
}

const Certificates = memo(function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Actual certificates data
  const actualCertificates: Certificate[] = [
    {
      title: "The Ultimate React Course 2024: React, Redux & More",
      issuer: "Udemy",
      date: "2024",
      image: "/images/react-sertifika.jpg",
      verificationUrl: "https://ude.my/UC-a32a2086-9fac-44da-90ba-147073bce8ae",
      skills: ["React", "Redux", "JavaScript"]
    },
    {
      title: "The Modern Javascript Bootcamp Course",
      issuer: "Udemy", 
      date: "2023",
      image: "/images/javascript-sertifika.jpg",
      verificationUrl: "https://www.udemy.com/certificate/UC-db2e4c83-0a2f-4089-af85-2eca28a10285/",
      skills: ["JavaScript", "ES6+"]
    },
    {
      title: "Go - The Complete Guide",
      issuer: "Udemy",
      date: "2024", 
      image: "/images/golang-sertifika.jpg",
      verificationUrl: "https://www.udemy.com/certificate/UC-6a05c8fe-59fe-4808-8c71-24507ad425bb/",
      skills: ["Golang"]
    }
  ];

  const certificates = certificatesData.length > 0 ? certificatesData : actualCertificates;

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
    <div className="w-full max-w-full">
      <h2 className="sr-only">Certificates and Achievements</h2>
      {/* Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="cursor-pointer group"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <Card className="cursor-pointer transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 h-full flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-t-lg"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                {/* Verification Badge */}
                {certificate.verificationUrl && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
              </div>
              
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {certificate.issuer} • {certificate.date}
                </p>
                
                {certificate.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{certificate.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateLightbox
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>

      {/* Empty State */}
      {certificates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Certificates Yet</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Certificates and achievements will be displayed here.
          </p>
        </motion.div>
      )}
    </div>
  );
});

export default Certificates;