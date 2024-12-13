import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="accordion">
      <div 
        className={`accordion-title ${isOpen ? 'open' : ''}`} 
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
