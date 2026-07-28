import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Disable body scroll while loading screen is active
    document.body.style.overflow = 'hidden';

    // Fallback timer: fade out after 2.5 seconds maximum, in case video fails to play or load
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 2500);

    return () => {
      // Restore body scroll on unmount
      document.body.style.overflow = '';
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleVideoEnd = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    // Wait for the fade-out CSS transition to complete (600ms) before unmounting
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div className={`loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="video-container">
        <video
          ref={videoRef}
          src="/loading-video.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="loading-video"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
