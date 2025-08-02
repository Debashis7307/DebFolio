import { motion } from "framer-motion";
import pic5 from "../assets/images/pic5.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-lg">Let me introduce myself</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 sm:h-1/3 relative lg:-mt-15"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 relative shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)]">
              <img
                src={pic5}
                alt="Debashis Bera"
                className="w-full h-full object-cover rounded-full shadow-2xl cursor-pointer max-[425px]:w-[110%] max-[425px]:h-[110%]"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  margin: 0,
                  padding: 0,
                  minWidth: "100%",
                  minHeight: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
              <div className="absolute inset-0 rounded-full border-8 border-primary/10 animate-spin-slow -z-10 "></div>
            </div>
            <div className="absolute -z-10 w-full h-full top-0 left-0 bg-primary/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Full Stack <span className="text-primary"> Developer</span> |AI &
              ML <span className="text-primary">Enthusiast</span> | Love to
              explore in the field of <span className="text-primary">Tech</span>
            </h3>

            <p className="text-lg mb-6 text-center">
              I see the world through the lens of code, and each project is a
              thrilling adventure. Tech, for me, is not just a job; it's a
              boundless playground where I unravel mysteries, dance with
              algorithms, and turn ideas into digital realities.
            </p>

            <p className="text-lg mb-6 text-center">
              The web isn't just a space for me; it's my canvas. I paint with
              pixels, creating not just websites but experiences. From
              responsive designs that adapt to any device to optimizing
              performance for seamless interactions, I'm all about making the
              web a better place.
            </p>

            <p className="text-lg mb-8 text-center">
              In lines of code, I find magic. It's the incantation that turns
              ideas into reality. It's the spell that transforms a blank screen
              into a vibrant, functional masterpiece.
              <br />
              <br />
              <span className="text-primary text-xl text-center mt-10">
                Let's code our dreams into reality ❤️
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
