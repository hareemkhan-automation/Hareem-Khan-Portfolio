import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    document.body.style.overflow = 'hidden';

    const fallbackTimer = window.setTimeout(() => {
      handleVideoEnd();
    }, isMobile ? 1200 : 2200);

    const video = videoRef.current;
    if (!isMobile && video) {
      video.play().catch(() => {
        handleVideoEnd();
      });
    }

    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(fallbackTimer);
    };
  }, [isMobile]);

  const handleVideoEnd = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    window.setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div className={`loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      {isMobile ? (
        <div className="loading-mobile-shell" aria-hidden="true">
          <div className="loading-mobile-ring" />
        </div>
      ) : (
        <div className="video-container">
          <video
            ref={videoRef}
            src="/loading-video.mp4"
            autoPlay
            muted
            playsInline
            disablePictureInPicture
            controls={false}
            preload="auto"
            onEnded={handleVideoEnd}
            className="loading-video"
          />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
