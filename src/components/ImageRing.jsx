import React, { useEffect, useRef, useState, useCallback } from "react";

const ImageRing  = ({
  images,
  radius = 10,
  width = 500,
  height = 500,
  autoRotate = false,
  rotationSpeed = 10,
}) => {
  // Responsive: use 3D ring on large screens, horizontal scroll on small screens
  const [isRing, setIsRing] = useState(() => typeof window !== 'undefined' ? window.innerWidth > 900 : true);

  useEffect(() => {
    const handleResize = () => setIsRing(window.innerWidth > 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ringRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate) return;
    let frame;
    const animate = () => {
      setAngle((prev) => prev + rotationSpeed);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [autoRotate, rotationSpeed]);

  // Drag to rotate (only for ring mode)
  const handleMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    const delta = e.clientX - startX.current;
    setAngle((prev) => prev + delta * 0.2);
    startX.current = e.clientX;
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
    document.body.style.userSelect = '';
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback((e) => {
    if (!isRing) return;
    dragging.current = true;
    startX.current = e.clientX;
    document.body.style.userSelect = 'none';
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, [isRing, handleMouseMove, handleMouseUp]);

  // Clean up listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="ring-container">
      {isRing ? (
        <div
          ref={ringRef}
          className="ring"
          style={{
            transform: `rotateY(${angle}deg)`,
            cursor: 'grab',
            width: `${width * 2}px`,
            height: `${height * 1.2}px`,
            margin: '0 auto',
            position: 'relative',
            perspective: '1200px',
            display: 'block',
          }}
          onMouseDown={handleMouseDown}
        >
          {images?.map((img, i) => {
            const step = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="ring-item"
                style={{
                  transform: `rotateY(${step}deg) translateZ(${radius}px)`,
                  width: `${width}px`,
                  height: `${height}px`,
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center center',
                  marginLeft: `-${width / 2}px`,
                  marginTop: `-${height / 2}px`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  borderRadius: '12px',
                }}
              />
            );
          })}
        </div>
      ) : (
        <div
          className="ring"
          style={{
            display: 'flex',
            flexDirection: 'row',
            cursor: 'grab',
            overflowX: 'auto',
            width: '100%',
            gap: '16px',
            padding: '8px 0',
          }}
        >
          {images?.map((img, i) => (
            <div
              key={i}
              className="ring-item"
              style={{
                minWidth: `${width }px`,
                height: `${height }px`,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageRing;
