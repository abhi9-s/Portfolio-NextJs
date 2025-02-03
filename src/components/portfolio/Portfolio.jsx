import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Health Speak",
    img: "https://www.wellable.co/blog/wp-content/uploads/2024/02/Rise-Of-Wellness-Chatbots.png",
    desc: "Developed a voice-driven AI assistant for real-time mental health support levearaging GPT, Claude and Gemini. Implemented sentiment analysis and crisis detection for empathetic, context-aware responses.",
  },
  {
    id: 2,
    title: "RN-FHIR Data Capture ",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*FAKeMSvgzw3B7qpAqYx1ww.jpeg",
    desc: "Developed a open-source React Native port for the Android FHIR SDK Data Capture module, enabling cross-platform form-based data entry. Simplified FHIR questionnaire handling by adding support for major primitive data types with chain of parsers and validators adhering the HL7 FHIR standards.",
  },
  {
    id: 3,
    title: "Vocal Pay",
    img: "https://www.instantpay.in/blog/wp-content/uploads/1-7.jpg",
    desc: "Developed a secure voice-based payment system with two-factor authentication, enabling seamless transactions for illiterate and visually impaired users. Designed to support multiple Indian languages, ensuring accessibility for diverse communities and demographies.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
