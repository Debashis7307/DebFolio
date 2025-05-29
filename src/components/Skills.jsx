import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import your images (adjust paths as needed)
import ArtIcon from '../assets/images/art1.png';
import TablaIcon from '../assets/images/tabla.png';
import CricketIcon from '../assets/images/cri.png';
import GymIcon from '../assets/images/gym.png';

const Skills = () => {
  const technicalSkills = [
    { name: 'C', percentage: 95, icon: '💻' },
    { name: 'C++', percentage: 94, icon: '🖥️' },
    { name: 'Python', percentage: 90, icon: '🐍' },
    { name: 'OS', percentage: 90, icon: '🐧' },
    { name: 'COA (VeriLog)', percentage: 85, icon: '🔌' },
    { name: 'Networks', percentage: 90, icon: '🌐' },
    { name: 'DBMS (MySQL)', percentage: 84, icon: '💾' },
    { name: 'Git & GitHub', percentage: 88, icon: '🚀' },
    { name: 'AI & ML', percentage: 80, icon: '🤖' },
    { name: 'Tailwind CSS', percentage: 70, icon: '🪁' },
    { name: 'React JS', percentage: 75, icon: '⚛' },
    { name: 'OCaml', percentage: 50, icon: '🐫' },
  ];

  const professionalSkills = [
    { name: 'Adaptability', percentage: 95 },
    { name: 'Creativity', percentage: 85 },
    { name: 'Team Work', percentage: 80 },
    { name: 'Communication', percentage: 85 },
    { name: 'Project Management', percentage: 90 },
    { name: 'Problem Solving', percentage: 95 },
  ];

  const extraActivities = [
    {
      title: 'Drawing',
      icon: ArtIcon,
      description: `Drawing is like taking a journey through the mind's eye, creating beauty with every stroke of pencils. Engaging in drawing is not merely a hobby for me; it's a captivating journey that allows me to express my innermost thoughts and emotions on a canvas. I love pencil sketching portraits, as well as exploring watercolor techniques.`
    },
    {
      title: 'Tabla',
      icon: TablaIcon,
      description: `Tabla is a classical Indian percussion instrument that has been a part of my life since childhood days. I have completed my 5th year of training and am capable of accompanying a wide range of songs with my rhythmic prowess. It's an instrument that allows me to express my passion for music and cultural heritage.`
    },
    {
      title: 'Cricket',
      icon: CricketIcon,
      description: `Cricket is more than just a hobby for me; it's a source of joy, camaraderie, and excitement that I look forward to experiencing every time I step on the field. As a right-handed batsman, I thrive on the fast-paced, action-packed nature of the game. My idol is Virat Kohli, whose fiery attitude and skill on the pitch inspire me to push myself harder and aim higher.`
    },
    {
      title: 'Gymming',
      icon: GymIcon,
      description: `Fitness is a crucial aspect of my life, both physically and mentally. I believe that a healthy body leads to a healthy mind. Although I am not a hardcore gym-goer, I regularly engage in strength training exercises, mostly free-hand, push-ups. My goal is not just to look good, but to feel good and stay strong. I strive to push myself beyond my limits and constantly challenge myself to improve.`
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-darker to-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="bg-white/11  p-4 rounded-xl shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)]"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 mb-2 rounded-full text-3xl flex items-center justify-center"
                    style={{
                      background: '#0d0d1a',
                      boxShadow: '-8px -8px 15px rgba(255,255,255,0.1), 10px 10px 15px black',
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-lg font-semibold mb-1">{skill.name}</span>
                  <div className="w-full bg-dark rounded-full h-2">
                    <motion.div
                      className="bg-primary rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-primary text-sm mt-1">{skill.percentage}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Professional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
            {professionalSkills.map((skill, index) => {
              const [hovered, setHovered] = useState(false);
              const [progress, setProgress] = useState(skill.percentage);

              useEffect(() => {
                let animation;
                if (hovered) {
                  setProgress(0);
                  let current = 0;
                  animation = setInterval(() => {
                    current++;
                    setProgress(current);
                    if (current >= skill.percentage) clearInterval(animation);
                  }, 15);
                } else {
                  setProgress(skill.percentage);
                }
                return () => clearInterval(animation);
              }, [hovered]);

              return (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center "
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="w-24 h-24 mb-4 relative ">
                    <CircularProgressbar
                      value={progress}
                      text={`${progress}%`}
                      styles={buildStyles({
                        pathColor: `rgba(0, 238, 255, ${skill.percentage / 100})`,
                        textColor: '#fff',
                        trailColor: '#323946',
                        strokeLinecap: 'butt',
                        textSize: '24px',
                        pathTransition: 'none'
                      })}
                      strokeWidth={10}
                    />
                  </div>
                  <span className="text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Extra Curricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Extra Curricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 238, 255, 0.2), 0 10px 10px -5px rgba(0, 238, 255, 0.05)',
                }}
                className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.4)] flex flex-col items-center text-center"
              >
                <div
                  className="w-24 h-24 mb-4 rounded-full p-2"
                  style={{
                    background: '#0d0d1a',
                    boxShadow:
                      '-8px -8px 15px rgba(255,255,255,0.1), 10px 10px 15px black',
                  }}
                >
                  <img
                    src={activity.icon}
                    alt={activity.title}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold mb-3 text-[#1ef]">{activity.title}</h4>
                <p className="text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};



export default Skills;
