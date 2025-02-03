import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="https://github.com/abhi9-s" target="_blank">
            <img src="./github.webp" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/abhi9-s/" target="_blank">
            <img src="./linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
