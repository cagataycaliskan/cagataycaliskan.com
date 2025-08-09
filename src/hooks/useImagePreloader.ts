'use client';

import { useEffect, useState } from 'react';
import { imageCache } from '@/lib/imageCache';

export function useImagePreloader(imageSources: string[]) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsLoading(false);
      return;
    }

    const preloadImages = async () => {
      try {
        let loaded = 0;
        const promises = imageSources.map(async (src) => {
          try {
            await imageCache.preloadImage(src);
            loaded++;
            setLoadedCount(loaded);
          } catch (error) {
            console.warn(`Failed to preload image: ${src}`, error);
            loaded++;
            setLoadedCount(loaded);
          }
        });

        await Promise.all(promises);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [imageSources]);

  return { isLoading, loadedCount, totalCount: imageSources.length };
}