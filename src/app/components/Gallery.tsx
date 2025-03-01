"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component from Next.js

// Define an interface for the image object
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  // Sample image array with proper typing
  const [images, setImages] = useState<GalleryImage[]>([
    { id: 1, src: "/assets/parkinglot.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/parkinglot.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/parkinglot.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/parkinglot.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/parkinglot.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/parkinglot.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/assets/parkinglot.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/assets/parkinglot.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/assets/parkinglot.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/assets/parkinglot.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/assets/parkinglot.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/assets/parkinglot.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "/assets/parkinglot.jpg", alt: "Gallery Image 13" },
    { id: 14, src: "/assets/parkinglot.jpg", alt: "Gallery Image 14" },
    { id: 15, src: "/assets/parkinglot.jpg", alt: "Gallery Image 15" },
  ]);

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(images[0]);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedImage, setDisplayedImage] = useState<GalleryImage>(images[0]);

  // Function to handle thumbnail click with proper typing
  const handleImageClick = (image: GalleryImage) => {
    if (selectedImage.id !== image.id) {
      setIsAnimating(true);
      setSelectedImage(image);
    }
  };

  // Effect to handle the animation sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAnimating) {
      // Wait for fade-out animation to complete before updating the displayed image
      timer = setTimeout(() => {
        setDisplayedImage(selectedImage);
        setIsAnimating(false);
      }, 300); // This should match the animation duration in CSS
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isAnimating, selectedImage]);

  return (
    <div className="w-full md:h-[800px] h-auto md:pt-0 pt-12 md:pb-0 pb-12 bg-[#23212A] flex items-center justify-center">
      <div className="w-[90%] md:w-[80%] h-full flex flex-col items-center justify-start second-font">
        <h1 className="w-full h-auto flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white py-6 md:py-4">
          Galerie
        </h1>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full md:h-3/4 flex flex-col md:flex-row items-center">
            {/* Main displayed image */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center mb-8 md:mb-0">
              <div className="w-full md:w-[90%] aspect-video md:h-[90%] bg-gradient-to-br from-[#2E3031] to-[#292B2D] shadow-[10px_10px_10px_8px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden flex items-center justify-center border-2 border-[#333] relative">
                <Image
                  src={displayedImage.src}
                  alt={displayedImage.alt}
                  layout="intrinsic" // Adjusts image based on its natural size
                  width={1200} // Width of the image, adjust based on your requirements
                  height={800} // Height of the image, adjust based on your requirements
                  className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </div>

            {/* Thumbnails grid */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
              <div className="w-full md:w-[90%] h-[300px] md:h-[90%] rounded-lg p-2 md:p-4 flex flex-wrap justify-center md:justify-start items-start overflow-y-auto">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className={`w-1/4 sm:w-1/5 aspect-square p-2 cursor-pointer transition-all duration-200 ${
                      selectedImage.id === image.id
                        ? "scale-95 opacity-70"
                        : "hover:scale-105"
                    }`}
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="w-full h-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="intrinsic"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover border-2 border-[#333] rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
