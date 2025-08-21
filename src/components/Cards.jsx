import React from "react";
import { motion } from "framer-motion"; 

const FeatureCard = (props) => {
  return (
    <motion.div
      className="feature-card-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + props?.idx * 0.1, duration: 0.4 }}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card-image"
      />
      <h5 className="feature-card-text1 HeadingThree">{props.title}</h5>
      <span className="feature-card-text2">{props.text}</span>
    </motion.div>
  );
};

const ListItem = (props) => {
  return (
      <motion.div
      className="list-item-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + props?.idx * 0.1, duration: 0.4 }}
    >
      <h5 className="list-item-text1 HeadingThree">{props.title}</h5>
      <span>{props.description}</span>
      </motion.div>
  );
};

export { FeatureCard, ListItem };
