"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CardSlider = ({
  members = [],
  title = "OUR TEAM",
  titleSize = "2xl",
  titleColor = "rgba(0, 76, 255, 1)",
  background,
  cardWidth = 280,
  cardHeight = 380,
  cardRadius = 20,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 0,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.9,
  sideCardOpacity = 0.8,
  grayscaleEffect = true,
  infoPosition = "bottom",
  infoTextColor = "rgb(8, 42, 123)",
  infoBackground = "transparent",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection) => {
      if (totalMembers === 0) return;
      setDirection(newDirection);
      const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers;
      setCurrentIndex(nextIndex);
      if (onMemberChange) onMemberChange(members[nextIndex], nextIndex);
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index) => (index + totalMembers) % totalMembers;

  const calculatePosition = (index) => {
    const activeIndex = currentIndex;
    const diff = wrapIndex(index - activeIndex);

    if (diff === 0) return "center";
    if (diff <= visibleCards) return `right-${diff}`;
    if (diff >= totalMembers - visibleCards) return `left-${totalMembers - diff}`;
    return "hidden";
  };

  const getVariantStyles = (position) => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94],
    };

    switch (position) {
      case "center":
        return { zIndex: 10, opacity: 1, scale: 1.1, x: 0, filter: "grayscale(0%)", transition };
      case "right-1":
        return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: cardWidth * 0.7, filter: grayscaleEffect ? "grayscale(100%)" : "none", transition };
      case "left-1":
        return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: -cardWidth * 0.7, filter: grayscaleEffect ? "grayscale(100%)" : "none", transition };
      default:
        return { zIndex: 0, opacity: 0, scale: 0.8, x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1), transition };
    }
  };

  // autoplay
  useEffect(() => {
    let interval;
    if (autoPlay > 0) {
      interval = setInterval(() => paginate(1), autoPlay);
    }
    return () => clearInterval(interval);
  }, [autoPlay, paginate]);

  // keyboard nav
  useEffect(() => {
    if (!keyboardNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // touch nav
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
  };

  return (
    <div
      className="team-carousel"
      style={{ background }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title */}
      {title && (
        <h1
          className={`title title-${titleSize}`}
          style={{
            color: "transparent",
            background: `linear-gradient(to bottom, ${titleColor}75 40%, transparent 76%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>
      )}

      <div className="carousel-wrapper" style={{ height: cardHeight + 100 }}>
        {/* Arrows */}
        {showArrows && (
          <>
            <motion.button className="nav-arrow left" onClick={() => paginate(-1)} whileTap={{ scale: 0.9 }}>
              <ChevronLeft />
            </motion.button>
            <motion.button className="nav-arrow right" onClick={() => paginate(1)} whileTap={{ scale: 0.9 }}>
              <ChevronRight />
            </motion.button>
          </>
        )}

        {/* Cards */}
        <div className="cards-container">
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;
              if (position === "hidden" && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  className="card"
                  style={{ width: cardWidth, height: cardHeight, borderRadius: cardRadius }}
                  initial={getVariantStyles("hidden")}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles("hidden")}
                  onClick={() => {
                    if (!isCurrent) {
                      const newDirection = index > currentIndex ? 1 : -1;
                      setDirection(newDirection);
                      setCurrentIndex(index);
                    }
                    if (onCardClick) onCardClick(member, index);
                  }}
                >
                  <img src={member.image} alt={member.name} />
                  {infoPosition === "overlay" && (
                    <div className="info-overlay" style={{ background: infoBackground, color: infoTextColor }}>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Info */}
      {infoPosition === "bottom" && members[currentIndex] && (
        <motion.div
          key={members[currentIndex].id + "-info"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="member-info"
          style={{ color: infoTextColor }}
        >
          <h2>{members[currentIndex].name}</h2>
          <p>{members[currentIndex].role}</p>
          {members[currentIndex].bio && <p className="bio">{members[currentIndex].bio}</p>}
        </motion.div>
      )}

      {/* Dots */}
      {showDots && (
        <div className="dots">
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              whileTap={{ scale: 0.9 }}
              style={{ background: index === currentIndex ? infoTextColor : `${infoTextColor}40` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
