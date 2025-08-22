import React, { useRef, useEffect, useState, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/use-mobile";

const Carousel3D = ({
  items,
  autoRotate = false,
  rotateInterval = 4000,
  cardHeight = 500,
  title = "From Textile to Intelligence",
  subtitle = "Customer Cases",
  tagline = "Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.",
  isMobileSwipe = true,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardClass = (index) => {
    if (index === active) return "carousel-card active";
    if (index === (active + 1) % items.length) return "carousel-card next";
    if (index === (active - 1 + items.length) % items.length) return "carousel-card prev";
    return "carousel-card hidden";
  };

  return (
    <section className="carousel3d">
      <div className="carousel-container" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={item.id} className={getCardClass(index)}>
            <div
              className="carousel-card-inner"
              style={{ height: `${cardHeight}px` }}
            >
              <div
                className="carousel-card-image"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              >
                <div className="overlay">
                  <h3>{item.brand.toUpperCase()}</h3>
                  <div className="line"></div>
                  <p>{item.title}</p>
                </div>
              </div>

              <div className="carousel-card-content">
                <h3>{item.title}</h3>
                <p className="brand">{item.brand}</p>
                <p className="description">{item.description}</p>

                <div className="tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <Link href={item.link} className="learn-more">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {!isMobile && (
          <>
            <button
              className="nav-btn left"
              onClick={() =>
                setActive((prev) => (prev - 1 + items.length) % items.length)
              }
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="nav-btn right"
              onClick={() => setActive((prev) => (prev + 1) % items.length)}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div className="indicators">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${active === idx ? "active" : ""}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
