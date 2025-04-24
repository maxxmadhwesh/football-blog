import React, { useState } from 'react';
import { useEffect } from 'react';
import ExpandableTopic from './ExpandableTopic';


const Content = () => {

  const [shorts, setShortsArray] = useState([]);
  const [analysis,setAnalysisArray] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const indexRes = await fetch('/stories/index.json');
      const files = await indexRes.json();
      console.log('✅ Fetched Index data:', files);

      const blogPromises = files.map(file =>
        fetch(`/stories/${file}`).then(res => res.json())
      );
      const blogData = await Promise.all(blogPromises);

      const shorts = blogData.filter(blog => blog.type === 'shorts');
      const analysis = blogData.filter(blog => blog.type === 'analysis');

      // Set to state
      setShortsArray(shorts);
      setAnalysisArray(analysis);
    };

    loadBlogs();
  }, []);



  return (
    <section className="hero">
      <div className="hero-content">
        <span className='welcome'>Hello, Welcome to <span className='titledec'>Thoughts on Ball</span> </span><h5 className='ballstop'>⚽️</h5> 
        <div className='about'>I am <span className='namereveal'>Ma<span className='capitalize'>x<span>x</span> </span></span> and this is my blog website about everything Football !<br/> 
        Apart from being a full-time Software Developer, I’m a football enthusiast using this website to share my theories, game analysis, opinions, and more." 😅<br/>
        I am a Manchester City Fan( I'll try not to be biased but c'mon KDB plays for us 🩵 - till 2025 😭 )<br/>
        Reach out <a href="#content" className="btn">to me</a> if you like my Theories( or Me ? 👉👈 )
        </div >
        <div className='datadiscussion'>Explore my Stuff ( digital ) - 

      <ExpandableTopic 
        title="Shorts"
        desc="Short 5 mins (max istg) reads covering small topics."
        blogs={shorts}
      />

      <ExpandableTopic 
        title="Analysis"
        desc="Long content going over complex and subjective topics."
        blogs={analysis}
      />
      

        </div>
      </div>
    </section>
  );
};

export default Content;
