import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yash Raj
        </motion.span>
        <div className="social">
         
          <a href="https://www.instagram.com/theyashrajdubey/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/Yashraj1805">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/yash-raj-dubey-a25818226/">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
