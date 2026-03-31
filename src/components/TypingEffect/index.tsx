import React, { useState, useEffect } from 'react';

export interface TypingEffectProps {
  content: string;
  speed?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  content,
  speed = 30,
  onComplete,
  showCursor = true,
  className = '',
}) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when content changes completely
    if (!content.startsWith(displayedContent)) {
      setDisplayedContent('');
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent((prev) => prev + content[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === content.length && onComplete) {
      onComplete();
    }
  }, [content, currentIndex, speed, onComplete, displayedContent]);

  return (
    <span className={`nova-typing-effect ${className}`}>
      {displayedContent}
      {showCursor && currentIndex < content.length && (
        <span className="nova-cursor" />
      )}
    </span>
  );
};
