import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YASH RAJ DUBEY</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              variants={textVariants}
              href="https://drive.google.com/file/d/1DL6hBp4rhGea2MuiDW9y1FSE8P2m1PhM/view?usp=drive_link" // Replace with the path to your resume
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security
              style={{ textDecoration: 'none', display: 'inline-block' }} // Ensure the link is clickable
            >
              <motion.button 
                whileHover={{ scale: 1.05 }} // Optional: add hover effect
                whileTap={{ scale: 0.95 }} // Optional: add tap effect
              >
                Resume
              </motion.button>
            </motion.a>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Cyber Security Enthusiast
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;