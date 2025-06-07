import React, { useState, useEffect, useRef } from 'react';
import '../../src/assets/styles/Milestones.css';

const images = [
  { src: 'src/assets/images/ms0.jpg', description: 'Team HACKAUT of MAKAUT and their guiding faculty minds — united by code and vision.' },
  { src: 'src/assets/images/ms1.jpg', description: 'Tech Fest 2K24? Nailed it. This is what post-success swagger looks like. #HACKAUT' },
  { src: 'src/assets/images/ms2.jpg', description: 'GDSC MAKAUT AI & ML core team members of the 2023 session.' },
  { src: 'src/assets/images/ms3.jpg', description: 'Team HACKAUT - ALPHA at Hack4Bengal Season 3.' },
  { src: 'src/assets/images/ms4.jpg', description: 'Live from the workshop! Team HACKAUT helping first-years write their first lines of code. #KickstartCoding #HACKAUT' },
  { src: 'src/assets/images/ms5.jpg', description: 'GDSC MAKAUT 2023 core members captured after wrapping up a successful workshop session.' },
  { src: 'src/assets/images/ms5.1.jpg', description: 'Introducing HACKAUT — the official tech club of MAKAUT — during the induction program for first-year students.' },
  { src: 'src/assets/images/ms6.2.jpg', description: '10 hours. Endless ideas. Pure passion. First-year students wrapped up their first hackathon with Team HACKAUT!' },
  { src: 'src/assets/images/ms6.jpg', description: 'Teaching the power of tech clubs and collaboration — planting the seeds of innovation at the induction program.' },
  { src: 'src/assets/images/ms7.jpg', description: 'On the main stage, feeling the Fest 2K24 energy! #LivingItUp' },
  { src: 'src/assets/images/ms8.jpg', description: 'One last frame together — farewell to our amazing HACKAUT seniors as they step into new adventures.' },
  { src: 'src/assets/images/ms9.jpg', description: 'Freshers party vibes with the best crew in town!' },
  { src: 'src/assets/images/ms10.3.jpg', description: 'Innovation at its best! Posing with the champs who cracked the "Most Innovative Solution" at HACKAUT’s 10-hour hackathon.' },
  { src: 'src/assets/images/ms10.jpg', description: 'Proud moment with Team HACKAUT-ALPHA — winners of the Best Use of Compose.io at Hack4Bengal S3!' },
  { src: 'src/assets/images/ms11.jpg', description: 'Capturing memories with our amazing seniors from Repl Devs 2K22 — legends of their time!' },
  { src: 'src/assets/images/ms12.4.jpg', description: 'And it begins! Our hackathon officially flagged off by sir on behalf of Team HACKAUT.' },
  { src: 'src/assets/images/ms12.jpg', description: 'One last click after the swag drop — Team GDSC 2K23 wrapping up an amazing chapter!' },
  { src: 'src/assets/images/ms13.jpg', description: 'Captured in action during the AI & ML workshop — teaching the basics of AI, NumPy, and Pandas. #GDSC2K23' },
  { src: 'src/assets/images/ms14.jpg'},
  { src: 'src/assets/images/ms15.5.jpg', description: 'Final pitch in progress — Team Innovaters showcasing their innovation at the hackathon presentation round.' },
  { src: 'src/assets/images/ms15.jpg', description: 'Mission accomplished! CodeXcellence 2K23 wrapped up with success and smiles. #HACKAUT' },
  { src: 'src/assets/images/ms16.jpg', description: 'Brains at work! Participants giving their best during the CodeXcellence coding competition. #HACKAUT' },
  { src: 'src/assets/images/ms17.6.jpg', description: 'The auditorium buzzing with energy during the hackathon at the college tech fest. #Hackaut #ClgTechFest.' },
  { src: 'src/assets/images/ms17.jpg', description: 'First hackathon experience unlocked! Loving every moment at Hack4Bengal S3, JIS University.' },
  { src: 'src/assets/images/ms18.jpg', description: 'Experienced Hack4Bengal — no wonder it’s called the biggest hackathon in Bengal! Loved the electric atmosphere, intense coding, and yes… especially the food! 😄🍕 #Hack4Bengal #BiggestHackathon #CodeAndChill.' },
  { src: 'src/assets/images/ms19.jpg', description: 'Focused on the goal. I will not stop until it’s done.' },
  { src: 'src/assets/images/ms20.jpg', description: 'Grabbing some awesome swags from the GDSC Vertex AI Cloud program!' },
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



