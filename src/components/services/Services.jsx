import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Skills from "../skills/Skills";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [showSkill, setShowSkill] = useState(true);
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on crafting seamless experiences
          <br /> and scalable solutions
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "red" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "red" }}>For Your</motion.b> Product.
          </h1>
          <button onClick={() => setShowSkill((prev) => !prev)} style={{backgroundColor: !showSkill ? "red" : "white", color: !showSkill ? "white" : "red"}}>
            {showSkill ? "What I bring to table ?" : "What are my dev skills ?"}          
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {showSkill ? (
          <Skills />
        ) : (
          <>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Branding</h2>
              <p>
                Craft cohesive visual and narrative elements defining brands
                across digital platforms, including logo design, color schemes,
                and tone of voice. Create memorable brand experiences to
                resonate with audiences and differentiate in competitive
                markets.
              </p>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Design</h2>
              <p>
                Craft intuitive and visually appealing user interfaces through
                wireframing, prototyping, and user testing. Ensure designs meet
                user needs and business objectives for enhanced engagement and
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Technical Expertise</h2>
              <p>
                Develop robust web applications using various programming
                languages, frameworks, and databases. Proficient in frontend and
                backend technologies, cloud deployment, and version control
                systems.
              </p>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Collabration and Leadership</h2>
              <p>
                Thrive in collaborative environments, contributing technical
                expertise to cross-functional teams. Effectively communicate
                with stakeholders, gather requirements, and mentor junior team
                members for continuous learning and growth.
              </p>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
