import { useState, useEffect } from "react";
import "./skills.scss";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const skills = {
    "Frontend & Designing": [
      { name: "ReactJs", src: "./react.png" },
      { name: "Redux", src: "./redux.png" },
      { name: "Redux-Saga", src: "./saga.png" },
      { name: "NextJs", src: "./next.svg" },
      { name: "VueJS", src: "./vue.png" },
      { name: "Material UI", src: "./material.png" },
      { name: "Mantine UI", src: "./mantine.png" },
      { name: "Tailwind CSS", src: "./tailwind.png" },
      { name: "Bootstrap", src: "./bootstrap.png" },
      { name: "Figma", src: "./figma.webp" },
    ],
    "Backend & Database": [
      { name: "Spring Boot", src: "./spring.png" },
      { name: "FastAPI", src: "./fastapi.svg" },
      { name: "NodeJs", src: "./node.png" },
      { name: "ExpressJs", src: "./express.png" },
      { name: "Redis", src: "./redis.webp" },
      { name: "Mongo DB", src: "./mongo.webp" },
      { name: "Dynamo DB", src: "./dynamo.png" },
    ],
    "Cloud & DevOps": [
      { name: "AWS EC2", src: "./ec2.png" },
      { name: "AWS ECR", src: "./ecr.png" },
      { name: "Docker", src: "./docker.webp" },
      { name: "NGINX", src: "./nginx.png" },
    ],
    Others: [
      { name: "Git", src: "./git.png" },
      { name: "FHIR SDK", src: "./fhir.webp" },
      { name: "VTK", src: "./vtk.svg" },
    ],
  };

  return (
    <div className="skillsContainer">
      <div className="skillsSection">
        <div className="skillsGrid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="category" key={category}>
              <h3>{category}</h3>
              {isMobile ? (
                <p className="skillsText">
                  {items.map((item) => item.name).join(", ")}
                </p>
              ) : (
                <div className="icons">
                  {items.map((item) => (
                    <div className="iconWrapper" key={item.name}>
                      <img src={item.src} alt={item.name} />
                      <span className="tooltip">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
