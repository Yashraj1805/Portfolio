import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Eco-Mitra (Currently Running)",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "An AI-driven mobile app aimed at promoting sustainability by tracking user actions and offering eco-friendly alternatives. Developed using React Native, TensorFlow.js, and blockchain technology, it also includes a rewards system for users.",
    link: "https://link-to-eco-mitra-demo.com", // Replace with your demo link
  },
  {
    id: 2,
    title: "Halloween-Themed Project",
    img: "https://wallpapercave.com/wp/wp7583426.jpg",
    desc: "A graphical user interface for performing basic image processing tasks such as filtering, resizing, and color adjustments. Built with Python and Tkinter for easy image manipulation and an intuitive user experience",
    link: "https://yashraj1805.github.io/Halloween/", // Replace with your demo link
  },
  {
    id: 3,
    title: "Image Processing GUI Application",
    img: "https://www.mygreatlearning.com/blog/wp-content/uploads/2021/06/iStock-966861240.jpg.webp",
    desc: "An image processing GUI application that allows users to upload, transform, and filter images using features like grayscale conversion, resizing, and edge detection. Built with Python and OpenCV, it offers a user-friendly interface for real-time image editing and saving.",
    link: "https://github.com/Yashraj1805/Image-Processing-GUI", // Replace with your demo link
  },
  {
    id: 4,
    title: "Caesar Cipher GUI Application",
    img: "https://imgs.search.brave.com/ul0MfxvGNcH0ArBoK4cwaQZfWzsTWlS0KEfkWhI4owE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc4LzU0LzU4/LzM2MF9GXzE3ODU0/NTg3MV85eEZ3ZkxG/NE80R1FxeEZDNDc3/bE1BdmpCZklmVUZ5/VS5qcGc",
    desc: "A visually appealing encryption/decryption tool using a Caesar Cipher algorithm, built with customizable button interactions and enhanced user experience.",
    link: "https://github.com/Yashraj1805/Caesar-Cipher-GUI-Application",
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
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
