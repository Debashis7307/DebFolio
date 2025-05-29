import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: '2017 - 2020',
      title: 'Secondary Education',
      description: 'In 2020, I graduated from Panithar GramShava Mahandra Siksha Sadan with an impressive 93% score. This accomplishment is a testament to my hard work, dedication, and strong academic foundation that was laid in secondary education. In school, I gained a foundation in important subjects like Math, Science, History, Geography, Sanskrit and Literature, which have been invaluable to my personal and professional development.',
      align: 'left'
    },
    {
      id: 2,
      year: '2020 - 2022',
      title: 'Higher-Secondary Education',
      description: 'I completed my higher secondary education from Karkai Vivakananda Vidyapith (H.S.) in 2022 with a stellar 91% overall grade. I pursued the proper science stream, studying subjects such as Mathematics, Physics, Chemistry, and Biology. Throughout my studies, I demonstrated a deep passion for science and a strong work ethic. My Higher-Secondary Education sparked a deep fascination with technology, and I knew I wanted to pursue a career in this field. I became particularly interested in Computer Science, Artificial Intelligence and Cybersecurity and began to develop the necessary skills and knowledge to pursue a career in this exciting and rapidly evolving field.',
      align: 'right'
    },
    {
      id: 3,
      year: '2022 - 2026',
      title: 'Bachelor of Technology',
      description: 'After completing my higher secondary education, I pursued a B.Tech degree in Computer Science & Engineering from Maulana Abul Kalam Azad University of Technology, West Bengal, with a focus on Data Structures, Algorithms, Operating Systems, and Computer Architecture. During my time in this program, I gained a strong foundation in technical concepts, including C, C++, Python, Web-Dev. I also developed essential skills such as problem-solving, coding, teamwork, and project management. My B.Tech degree prepared me for the challenges and opportunities of a career in the tech industry and allowed me to explore my interests and develop my expertise.',
      align: 'left'
    }
  ];

  return (
    <section id="education" className="py-20 bg-darker ">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Journey</span>
          </h2>
          <h3 className="text-2xl mt-4">Education</h3>
        </motion.div>

        <div className="relative ">
          <div className="absolute left-1/2 w-1 h-full bg-primary/20 transform -translate-x-1/2 hidden md:block "></div>
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ rotateY: item.align === 'left' ? 90 : -90 }}
              whileInView={{ rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 md:flex ${item.align === 'left' ? 'md:justify-start' : 'md:justify-end'} perspective-[1000px]`}
            >
              <div className={`w-full md:w-1/2 shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.8)] p-6 rounded-xl border border-primary/30 bg-dark/50 backdrop-blur-sm ${item.align === 'left' ? 'md:mr-8' : 'md:ml-8'} shadow-[ -8px_-8px_15px_rgba(255,255,255,0.1), 10px_10px_15px_black ]`}
                   style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center text-primary mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;