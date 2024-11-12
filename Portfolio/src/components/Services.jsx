import React from "react";
import { motion } from "framer-motion";
import { AiFillAndroid, AiFillIeCircle, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    one: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
    twoAndThree: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
    four: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section className="servicesSection">
        <motion.div
          className="serviceBox serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>5+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            ...animations.whileInView.transition,
            delay: 0.2,
          }}
        >
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
        <motion.div
          className="serviceBox serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
          transition={{
            ...animations.whileInView.transition,
            delay: 0.4,
          }}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
