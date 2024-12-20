import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import HomePageScript from './HomePageScript';

const HomePage = () => {
  const canvasRef = useRef(null);
  const mouseEffectRef = useRef(null);
  const mainTxtRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      HomePageScript(canvasRef);
    }
  }, []);

  return (
    <div className="homepage">
      <div className="mouse-effect" ref={mouseEffectRef}>
        <div className="circle"></div>
        <div className="circle-follow"></div>
      </div>

      <header className="hide-text">
        <div className="header-inner">
          <a href="#" className="navbar-brand">VIEWF2I</a>
          <nav>
            <ul>
              <li><Link to="/search?filter=author">By Author</Link></li>
              <li><Link to="/search?filter=type">By Type</Link></li>
              <li><Link to="/search?filter=genre">By Genre</Link></li>
              <li><Link to="/search?filter=date">By Date</Link></li>
            </ul>
          </nav>
          <button className="ham-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      <h1 className="main-txt" ref={mainTxtRef}>VIEWF2I</h1>

      <section className="banner hide-text">
        <div className="banner-inner">
          <div className="top-desc">
            <h5>Lucas & Cheick</h5>
            <h6>API & VIEW</h6>
            <span></span>
          </div>
          <div className="bottom-desc">
            <div className="left-desc">
              <h1>DSP</h1>
              <div className="desc-inner">
                <h5>Digital School of Paris</h5>
                <h6>IEF2I</h6>
              </div>
            </div>
            <div className="middle-desc">
              <h2>Parce que Pourquoi pas</h2>
            </div>
            <div className="right-desc">
              <h1>01</h1>
              <div className="desc-inner">
                <span>Social Links</span>
                <ul>
                  <li><a href="https://www.linkedin.com/in/lucas-dias-1436562bb"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/Jedanns/"><i className="fa-brands fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="rotated-text hide-text">Tout jolie la HomePage</span>

      <canvas ref={canvasRef} className="webgl"></canvas>
    </div>
  );
};

export default HomePage;
