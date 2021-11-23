import React from 'react';
import './Hero.css';

const Top = () => {
    return (
        <>
            <section className="hero">
                <video src="/video/hero.mp4" type="video/mp4" className="hero-video" autoPlay muted loop/>
                <h1>Just Do It.</h1>
                <img src="/img/logo.png" alt="" className="hero-logo"/>
                <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff626d" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,154.7C640,128,800,96,960,96C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </section>
        </>
    )
}

export default Top
