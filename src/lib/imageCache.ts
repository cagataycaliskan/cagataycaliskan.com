class ImageCache {
  private loadedImages = new Set<string>();

  preloadImage(src: string): Promise<void> {
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        this.loadedImages.add(src);
        resolve();
      };
      img.onerror = () => {
        // Even if error, mark as "attempted" so we don't retry
        this.loadedImages.add(src);
        resolve();
      };
      img.src = src;
    });
  }

  preloadImages(sources: string[]): Promise<void[]> {
    return Promise.all(sources.map(src => this.preloadImage(src)));
  }

  isImageCached(src: string): boolean {
    return this.loadedImages.has(src);
  }

  clear(): void {
    this.loadedImages.clear();
  }
}

export const imageCache = new ImageCache();