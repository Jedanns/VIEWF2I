import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const mouseEffectRef = useRef(null);

  useEffect(() => {
    const circles = mouseEffectRef.current.querySelectorAll('.circle, .circle-follow');
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      circles.forEach((circle, index) => {
        const delay = index === 0 ? 0.05 : 0.1;
        circle.style.transform = `translate(${x}px, ${y}px)`;
        circle.style.transition = `transform ${delay}s ease`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

return (
    <header className="header">
        <div className="mouse-effect" ref={mouseEffectRef}>
            <div className="circle"></div>
            <div className="circle-follow"></div>
        </div>
        <div className="header-inner">
            <Link to="/" className="navbar-brand">VIEWF2I</Link>
            <button className="ham-btn">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
);
};

export default Header;
