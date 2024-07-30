import React, { useEffect, useState } from 'react'
import home from '../Home/home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Home() {

      const[data1,setData1]=useState(0);
      const[data2,setData2]=useState(0);
      const[data3,setData3]=useState(0);
      const[data4,setData4]=useState(0);

      useEffect(() =>{
        setTimeout(()=>{
          if(data1!==3000)
            setData1((prev)=>prev+1);
          if(data2!==8000)
            setData2((prev)=>prev+1);
          if(data3!==9900)
            setData3((prev)=>prev+1);
          if(data4!==1000)
            setData4((prev)=>prev+1);
        })
      })
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className="text-container">
          <h1 className="heading">Welcome to Yoga With ELAM</h1>
          <p className="description">
            A beautiful yoga space in a historic Georgian building located in the heart of Bristol.
          </p>
          <button className="button">Find out more</button>
        </div>
      </div>
      <div className='homebody'>
          <div className='heroic'>
            <div className='heroicpic'>
              <h1 className='heroheading'>Count the ways you can personalize your practice</h1>
              <div className="stats-container">
                <div className="stat-item">
                  <h2 className="stat-value">{data1}+</h2>
                  <p className="stat-description">Live Sessions</p>
                </div>
                <div className="stat-item">
                  <h2 className="stat-value">{data2}+</h2>
                  <p className="stat-description">Active Members</p>
                </div>
                <div className="stat-item">
                  <h2 className="stat-value">{data3}%</h2>
                  <p className="stat-description">Engagement Rate</p>
                </div>
                <div className="stat-item">
                  <h2 className="stat-value">{data4}%</h2>
                  <p className="stat-description">User Satisfaction</p>
                </div>
              </div>
            </div>
            <div className='heroictext'>
              <div className='herotext1'>
                <div className='herotext1pic'>
                </div>
                <div className='herotext1pictext'>
                  <h2 >Healthy Lifestyle</h2>
                  <p>Embrace a healthy lifestyle through the transformation power of yoga and cultivate physical vitality and inner peace.</p>
                </div>
              </div>
              <div className='herotext1'>
                <div className='herotext2pic'>
                </div>
                <div className='herotext1pictext'>
                  <h2 >Body Balancing</h2>
                  <p>Through purposeful poses and mindful breathing yoga cultivates a strong flexible body while nuturing inner calm.</p>
                </div>
              </div>
              <div className='herotext1'>
                <div className='herotext3pic'>
                </div>
                <div className='herotext1pictext'>
                  <h2 >Meditation Practice</h2>
                  <p>Discover inner serenity and minfulness as you cultivate a profound connection with the present moment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='homeclass'>
            <div className='lefthomeclass'>
              <h2 style={{paddingTop:"10px",paddingLeft:"35px"}}>Classes for every level and need</h2>
              <p style={{fontSize:"25px", color:"#343D3C",paddingLeft:"35px"}}>Whether you’re a beginner or experienced yogi, whether you’re here find a pocket of peace or master headstand, we have something to fit your needs and schedule.</p>
            </div>
            <div className='righthomeclass'>
              <div className='righthomebox1'>
                <div className='righthomebox1pic'>
                </div>
                <div className='herotext1pictext'>
                  <h2 style={{"paddingLeft":"55px","color":"#3F6E71"}}>Styles to suit you</h2>
                  <p>Find your flow with Vinyasa, go inward with Yin, develop presence with meditation, move energy with Qigong.</p>
                </div>
              </div>
              <div className='righthomebox1'>
                <div className='righthomebox2pic'>
                </div>
                <div className='herotext1pictext'>
      <h2 style={{"paddingLeft":"55px",color:"#3F6E71"}}>Yoga anytime</h2>
                  <p>Energise your morning, re-focus at lunchtime, unwind in the evening, sleep deeply at night.</p>
                </div>
              </div>
              <div className='righthomebox1'>
                <div className='righthomebox3pic'>
                </div>
                <div className='herotext1pictext'>
                  <h2 style={{"paddingLeft":"55px","color":"#3F6E71"}}>Top-level teachers</h2>
                  <p>Learn from and connect with passionate yoga and meditation experts.</p>
                </div>
              </div>
            </div>
            <button className='browse-button'>Browse Classes</button>
            </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Home