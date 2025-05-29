import React, { useState, useEffect, useRef } from 'react';
import '../../src/assets/styles/Milestones.css';

const images = [
  { src: 'src/assets/images/ms0.jpg', description: 'Description for Image 0' },
  { src: 'src/assets/images/ms1.jpg', description: 'Description for Image 1 Here are some creative and engaging gallery section headings that convey the idea of glimpses or moments from your journey' },
  { src: 'src/assets/images/ms2.jpg', description: 'Description for Image 2' },
  { src: 'src/assets/images/ms3.jpg', description: 'Description for Image 3' },
  { src: 'src/assets/images/ms4.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms5.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms5.1.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms6.2.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms6.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms7.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms8.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms9.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms10.3.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms10.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms11.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms12.4.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms12.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms13.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms14.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms15.5.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms15.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms16.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms17.6.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms17.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms18.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms19.jpg', description: 'Description for Image 4' },
  { src: 'src/assets/images/ms20.jpg', description: 'Description for Image 4' },
];

const Milestones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    setIsPlaying(true);
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  };

  useEffect(() => {
    startSlideshow();
    return () => clearInterval(intervalRef.current);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="milestones-section">
      <div className="milestones-header">
        <h2 className="milestones-heading">
          Captured <span className="text-primary">Moments</span>
        </h2>
        <p className="milestones-subheading">
          Some Glimpses of my journey till now!
        </p>
      </div>

      <div
        className="milestones-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`milestone-card ${hovered ? 'hovered' : ''}`}
          onClick={togglePlayPause}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') togglePlayPause();
          }}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <img
            src={images[currentIndex].src}
            alt={`Milestone ${currentIndex + 1}`}
            className={`milestone-image ${hovered ? 'blurred' : ''}`}
          />

          {hovered && (
            <div className="milestone-description middle-text" aria-live="polite">
              {images[currentIndex].description}
            </div>
          )}

          <button
            className="milestone-nav left"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous Image"
          >
            &lt;
          </button>

          <button
            className="milestone-nav right"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next Image"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;



