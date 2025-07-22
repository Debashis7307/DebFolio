import React, { useState, useEffect, useRef } from "react";
import "../../src/assets/styles/Milestones.css";
import ms0 from "../assets/images/ms0.jpg";
import ms1 from "../assets/images/ms1.jpg";
import ms2 from "../assets/images/ms2.jpg";
import ms3 from "../assets/images/ms3.jpg";
import ms4 from "../assets/images/ms4.jpg";
import ms5 from "../assets/images/ms5.jpg";
import ms5_1 from "../assets/images/ms5.1.jpg";
import ms6_2 from "../assets/images/ms6.2.jpg";
import ms6 from "../assets/images/ms6.jpg";
import ms7 from "../assets/images/ms7.jpg";
import ms8 from "../assets/images/ms8.jpg";
import ms9 from "../assets/images/ms9.jpg";
import ms10_3 from "../assets/images/ms10.3.jpg";
import ms10 from "../assets/images/ms10.jpg";
import ms11 from "../assets/images/ms11.jpg";
import ms12_4 from "../assets/images/ms12.4.jpg";
import ms12 from "../assets/images/ms12.jpg";
import ms13 from "../assets/images/ms13.jpg";
import ms14 from "../assets/images/ms14.jpg";
import ms15_5 from "../assets/images/ms15.5.jpg";
import ms15 from "../assets/images/ms15.jpg";
import ms16 from "../assets/images/ms16.jpg";
import ms17_6 from "../assets/images/ms17.6.jpg";
import ms17 from "../assets/images/ms17.jpg";
import ms18 from "../assets/images/ms18.jpg";
import ms19 from "../assets/images/ms19.jpg";
import ms20 from "../assets/images/ms20.jpg";

const images = [
  {
    src: ms0,
    description:
      "Team HACKAUT of MAKAUT and their guiding faculty minds — united by code and vision.",
  },
  {
    src: ms1,
    description:
      "Tech Fest 2K24? Nailed it. This is what post-success swagger looks like. #HACKAUT",
  },
  {
    src: ms2,
    description: "GDSC MAKAUT AI & ML core team members of the 2023 session.",
  },
  { src: ms3, description: "Team HACKAUT - ALPHA at Hack4Bengal Season 3." },
  {
    src: ms4,
    description:
      "Live from the workshop! Team HACKAUT helping first-years write their first lines of code. #KickstartCoding #HACKAUT",
  },
  {
    src: ms5,
    description:
      "GDSC MAKAUT 2023 core members captured after wrapping up a successful workshop session.",
  },
  {
    src: ms5_1,
    description:
      "Introducing HACKAUT — the official tech club of MAKAUT — during the induction program for first-year students.",
  },
  {
    src: ms6_2,
    description:
      "10 hours. Endless ideas. Pure passion. First-year students wrapped up their first hackathon with Team HACKAUT!",
  },
  {
    src: ms6,
    description:
      "Teaching the power of tech clubs and collaboration — planting the seeds of innovation at the induction program.",
  },
  {
    src: ms7,
    description: "On the main stage, feeling the Fest 2K24 energy! #LivingItUp",
  },
  {
    src: ms8,
    description:
      "One last frame together — farewell to our amazing HACKAUT seniors as they step into new adventures.",
  },
  { src: ms9, description: "Freshers party vibes with the best crew in town!" },
  {
    src: ms10_3,
    description:
      'Innovation at its best! Posing with the champs who cracked the "Most Innovative Solution" at HACKAUT’s 10-hour hackathon.',
  },
  {
    src: ms10,
    description:
      "Proud moment with Team HACKAUT-ALPHA — winners of the Best Use of Compose.io at Hack4Bengal S3!",
  },
  {
    src: ms11,
    description:
      "Capturing memories with our amazing seniors from Repl Devs 2K22 — legends of their time!",
  },
  {
    src: ms12_4,
    description:
      "And it begins! Our hackathon officially flagged off by sir on behalf of Team HACKAUT.",
  },
  {
    src: ms12,
    description:
      "One last click after the swag drop — Team GDSC 2K23 wrapping up an amazing chapter!",
  },
  {
    src: ms13,
    description:
      "Captured in action during the AI & ML workshop — teaching the basics of AI, NumPy, and Pandas. #GDSC2K23",
  },
  { src: ms14 },
  {
    src: ms15_5,
    description:
      "Final pitch in progress — Team Innovaters showcasing their innovation at the hackathon presentation round.",
  },
  {
    src: ms15,
    description:
      "Mission accomplished! CodeXcellence 2K23 wrapped up with success and smiles. #HACKAUT",
  },
  {
    src: ms16,
    description:
      "Brains at work! Participants giving their best during the CodeXcellence coding competition. #HACKAUT",
  },
  {
    src: ms17_6,
    description:
      "The auditorium buzzing with energy during the hackathon at the college tech fest. #Hackaut #ClgTechFest.",
  },
  {
    src: ms17,
    description:
      "First hackathon experience unlocked! Loving every moment at Hack4Bengal S3, JIS University.",
  },
  {
    src: ms18,
    description:
      "Experienced Hack4Bengal — no wonder it’s called the biggest hackathon in Bengal! Loved the electric atmosphere, intense coding, and yes… especially the food! 😄🍕 #Hack4Bengal #BiggestHackathon #CodeAndChill.",
  },
  {
    src: ms19,
    description: "Focused on the goal. I will not stop until it’s done.",
  },
  {
    src: ms20,
    description:
      "Grabbing some awesome swags from the GDSC Vertex AI Cloud program!",
  },
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
          className={`milestone-card ${hovered ? "hovered" : ""}`}
          onClick={togglePlayPause}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") togglePlayPause();
          }}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          <img
            src={images[currentIndex].src}
            alt={`Milestone ${currentIndex + 1}`}
            className={`milestone-image ${hovered ? "blurred" : ""}`}
          />

          {hovered && (
            <div
              className="milestone-description middle-text"
              aria-live="polite"
            >
              {images[currentIndex].description}
            </div>
          )}

          <button
            className="milestone-nav left"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous Image"
          >
            &lt;
          </button>

          <button
            className="milestone-nav right"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
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
