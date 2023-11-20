import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Top.css';

function Top() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: '/tech01.png', link: '/' },
    { url: '/tech02.png', link: '/News' },
    { url: '/tech05.png', link: '/Notes' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="Top2">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
            onClick={() => handleImageClick(slide.link)}
          />
        ))}
      </div>
      <button className="prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        <FontAwesomeIcon icon={faChevronLeft} beat/>
      </button>
      <button className="next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        <FontAwesomeIcon icon={faChevronRight} beat/>
      </button>
      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Top;
