import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const Typewriter = ({ text, delay, infinite }) => {
  Typewriter.propTypes = {
    text: PropTypes.node.isRequired,
    delay: PropTypes.node.isRequired,
    infinite: PropTypes.node.isRequired,
  };
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return (
      <span>{currentText}</span>
  );
};

export default Typewriter;