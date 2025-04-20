import React from 'react';
import TopicSection from './TopicSection';

const Content = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className='welcome'>Hello, Welcome to <span className='titledec'>Thoughts on Ball</span> </span><h7 className='ballstop'>⚽️</h7> 
        <div className='about'>I am <span className='namereveal'>Ma<span className='capitalize'>x<span>x</span> </span></span> and this is my blog website about everything Football !<br/> 
        Apart from being a full-time Software Developer, I’m a football enthusiast using this website to share my theories, game analysis, opinions, and more." 😅<br/>
        I am a Manchester City Fan( I'll try not to be biased but c'mon KDB plays for us 🩵 - till 2025 😭 )<br/>
        Reach out <a href="#content" className="btn">to me</a> if you like my Theories( or Me ? 👉👈 )
        </div >
        <div className='datadiscussion'>Explore my Stuff ( digital ) - 
        <TopicSection 
        title="Shorts" 
        description="Short 5 mins (max istg) reads covering small topics." />

      <TopicSection 
        title="Analysis" 
        description="Long content going over complex and subjective topics." />
        </div>
      </div>
    </section>
  );
};

export default Content;
