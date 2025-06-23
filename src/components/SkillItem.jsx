import React, { useEffect, useRef, useState } from 'react';

const SkillItem = ({ name, progress, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <li className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{progress}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="progress-bar"
          style={{
            width: isVisible ? `${progress}%` : '0%',
            backgroundColor: color,
          }}
        />
      </div>
    </li>
  );
};

export default SkillItem;
// This component represents a single skill item with a progress bar.
// It uses Intersection Observer to animate the progress bar when the item is in view.
// The `name` prop is the skill name, `progress` is the percentage of proficiency, and `color` is the color of the progress bar.
// The component is styled with CSS classes for layout and animation effects.
// The `useEffect` hook sets up the observer, and the `useRef` hook is used to reference the DOM element for observation.   