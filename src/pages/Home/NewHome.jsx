import React from "react";
import { motion } from "framer-motion";

const NewHome = () => {
 return (
    <div className="homepage">
      {/* ========== Hero Section ========== */}
      <section className="hero">
        {/* Animated Background Blobs */}
        <motion.div
          className="blob blob1"
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob2"
          animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Perfect App for more than just fun
          </motion.h1>

          <p>
            The simple, intuitive and powerful app to manage your work.
          </p>

          <div className="buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="primary-btn"
            >
              Start Using For Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="secondary-btn"
            >
              Explore Features
            </motion.button>
          </div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://cdn.dribbble.com/users/926537/screenshots/14505743/media/07b7b2f26ab4e5f6a95e8f7c6db3f264.png"
            alt="App Preview"
          />
        </motion.div>
      </section>

      {/* ========== Features Section ========== */}
      <section className="features">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          That will boost your productivity
        </motion.h2>

        <p className="subtitle">
          With our wide range of features, you can create a custom app for any business.
        </p>

        <div className="feature-cards">
          {["Free Trial", "Secure Data", "Quick Access", "24h Support"].map((title, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card"
            >
              <h3>{title}</h3>
              <p>
                {title === "Free Trial" && "Start free with no risk."}
                {title === "Secure Data" && "Your privacy is protected."}
                {title === "Quick Access" && "Fast and easy to use."}
                {title === "24h Support" && "We’re here anytime."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== How it Works Section ========== */}
      <section className="how-it-works">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let’s See How It Works
        </motion.h2>

        <div className="steps">
          {["Sign up easily", "Set up your app", "Enjoy productivity"].map((step, i) => (
            <motion.div whileHover={{ y: -10 }} className="step" key={i}>
              <span>{i + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


export default NewHome;
