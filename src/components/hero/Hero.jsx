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
    x: "100%", // Start from the right side of the screen
  },
  animate: {
    x: "-360%", // Move to the left side completely
    transition: {
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "loop", // Continuous loop
      duration: 20, // Adjust the speed here
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
          <motion.h2 variants={textVariants}>ABHINAV SHARMA</motion.h2>
          <motion.h1 variants={textVariants}>
            Fullstack Dev
            <br />& UI Designer
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <motion.a href="#Contact">See the Latest Works</motion.a>
            </motion.button>
            <motion.button variants={textVariants}>
              <motion.a href="#Contact">Contact Me</motion.a>
            </motion.button>
          </motion.div> */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt="Scroll Down"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Eat Sleep Code Repeat
      </motion.div>
      <div className="imageContainer">
        <img src="./pixelcut-export.png" alt="Big Statue of Mine LOL" />
      </div>
    </div>
  );
};

export default Hero;
