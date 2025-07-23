import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import picture from '../assets/images/pic1.png';
const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: { min: 0.5, max: 3 },
        random: true
      },
      links: {
        enable: true,
        distance: 100,
        color: "#0ef",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: "bounce"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 90
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-4xl inline-block"
              animate={{ 
                rotate: [0, 10, -10, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3,
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span> <br />
            Hey! <br />
            Everyone, <br />
            It's Me
          </motion.h3>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Debashis Bera
          </motion.h1>

          <motion.h3 
            className="text-2xl md:text-3xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            And I am a{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'AI/ML Enthusiast',
                1000,
                'Tech Explorer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.h3>

          <motion.p 
            className="text-lg mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-primary text-4xl">"</span>With code, I weave dreams into reality,
            <br />Creating a world where all is possible.
            <br />I'm a developer, with a passion that burns bright,
            <br />Building a future that's filled with light.
            <span className="text-primary text-4xl">"</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a 
              href="/Deb_Tech_Resume.pdf" 
              download="Debashis_Bera_CV.pdf"
              className="px-6 py-3 shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)] bg-primary text-dark font-bold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all border-2 border-white/20 relative overflow-hidden "
              whileHover={{
                y: -3,
                boxShadow: "0 10px 20px rgba(0, 238, 255, 0.4)",
                borderColor: "rgba(255,255,255,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download My CV</span>
              <motion.span 
                className="absolute inset-0 bg-white/10 rounded-full  "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-dark transition-all relative overflow-hidden shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)]"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 20px rgba(0, 238, 255, 0.4)",
                borderColor: "rgba(0, 238, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 ">Let's Talk</span>
              <motion.span 
                className="absolute inset-0 bg-primary/10 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image - Hidden on screens < 425px */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2 relative flex flex-col items-center justify-center max-[425px]:hidden"
        >
          {/* Floating Circle Container */}
          <div className="relative w-[24rem] h-[23rem] flex items-center justify-center">
            {/* Circular Frame */}
            <div className="absolute w-full h-full rounded-full border-4 border-primary/40 z-10 overflow-visible">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border-8 border-primary/10 animate-spin-middum -z-20"></div>
            </div>

            {/* Image Coming Out of Circle */}
            <motion.img 
              src={picture}
              alt="Debashis Bera" 
              className="relative z-20 w-80 h-80 md:w-[24rem] md:h-[23.6rem] object-cover rounded-lg shadow-2xl cursor-pointer"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.1,
                delay: 0.1,
                type: "spring",
                stiffness: 200
              }}
              style={{
                clipPath: 'circle(80% at 50% 50%)',
                transform: 'translateX(15%) rotate(-5deg)',
                border: '4px solid rgba(0, 238, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 238, 255, 0.3)'
              }}
            />
          </div>

          {/* Stylish Baseline - Centered Below */}
          <div className="relative mt-8 w-3/4">
            <div className="h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-lg shadow-primary/30"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/20 blur-sm"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;