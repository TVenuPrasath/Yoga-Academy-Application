import React from 'react'
import Navbar from '../Navbar/Navbar'
import './about.css';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div>
      <Navbar/>
        <h1 className='abouttopic'>About Us</h1>
      <div className='bothabout'>
        <span className='leftaboutimage'>
          <div className='leftabout1'> 

          </div>
        </span>
        <div className='rightabout1'>
          <p>Come for Yoga. Come for Pilates. Come to meditate, invigorate and unwind. Come for the chill zone and the amenities. Come to breathe, to sweat, to learn and let go. Come for community. Come first thing, come last thing, come once or every day. Come to meet others. Come to be alone. Come with experience. Come, bravely, for the very first time. Come to check in. Disconnect to reconnect - with your body and your mind, with likeminded people, and with what really matters: who you are, how you feel, and how you want to live.</p>
        </div>
      </div>
        <div className='picdiv'>
          <div className='aboutpic'>
            <div className='pic1'>
            </div>
            <div className='pic1textarea'>
              <h1 className='pic1head'>Lifestyle to the yoga</h1>
              <p className='pic1text'>Through and through we were trying to make our Yoga studio a peaceful, meditational place of tranquility, which according to our ever-growing list of attendees we've succeeded at.</p>
            </div>
          </div>
        </div>
        <div className='picdiv'>
          <div className='aboutpic div2'>
          <div className='pic1textarea'>
              <h1 className='pic1head'>Yoga for Everyone</h1>
              <p className='pic1text'>Yoga has always been something more, than just a workout routine. It's always been more of a philosophy, a lifestyle for a mind & body balance.</p>
            </div>
            <div className='pic2'>
            </div>
          </div>
        </div>
        <div className='picdiv'>
          <div className='aboutpic '>
            <div className='pic3'>
            </div>
            <div className='pic1textarea'>
              <h1 className='pic1head'>Mindfulness and Meditation</h1>
              <p className='pic1text'>Through and through we were trying to make our Yoga studio a peaceful, meditational place of tranquility, which according to our ever-growing list of attendees we've succeeded at.</p>
            </div>
          </div>
        </div>
        <br></br>
          <Footer/>
    </div>
  )
}

export default About