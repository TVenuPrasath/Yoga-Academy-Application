import React from 'react'
import Navbar from '../Navbar/Navbar'
import './about.css';

function About() {
  return (
    <div>
      <Navbar/>
      <div className='bothabout'>
        <div className='leftabout1'> 
          <p>Welcome to Elmar.</p>
        </div>
        <div className='rightabout1'>
          <p>Elmar meaning ‘nourish’ and ‘soul’, is a multidisciplinary movement studio in the heart of Hawke’s Bay. A house of movement, wellness, mindfulness and connection. A place to release, reignite and connect – with your body and your mind, your breath and your being – in a space built to inspire.</p>
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
          <div className='aboutpic'>
            <div className='pic1'>
            </div>
            <div className='pic1textarea'>
              <h1 className='pic1head'>Lifestyle to the yoga</h1>
              <p className='pic1text'>Through and through we were trying to make our Yoga studio a peaceful, meditational place of tranquility, which according to our ever-growing list of attendees we've succeeded at.</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default About