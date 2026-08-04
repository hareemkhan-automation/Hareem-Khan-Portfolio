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

    if (window.innerWidth <= 768) {
      window.setTimeout(() => {
        handleVideoEnd();
      }, 800);
      return () => {
        document.body.style.overflow = '';
      };
    }

    const video = videoRef.current;
    const fallbackTimer = window.setTimeout(() => {
      handleVideoEnd();
    }, 2400);

    const startPlayback = () => {
      if (!video) {
        handleVideoEnd();
        return;
      }

      video.play().catch(() => {
        handleVideoEnd();
      });
    };

    if (video) {
      if (video.readyState >= 2) {
        startPlayback();
      } else {
        video.addEventListener('canplay', startPlayback, { once: true });
        video.addEventListener('loadeddata', startPlayback, { once: true });
      }
    } else {
      handleVideoEnd();
    }

    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('canplay', startPlayback);
        video.removeEventListener('loadeddata', startPlayback);
      }
    };
  }, []);

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
