import  { useEffect } from "react";

const useImagePreloader = (imageUrls: string[]) => {
  useEffect(() => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, [imageUrls]);
};

export default useImagePreloader; 