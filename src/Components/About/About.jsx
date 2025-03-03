import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
     <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
     </div>
     <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leaders today</h2>
        <p>Education is an integral tool that aids the overall growth and development of an individual and a society. It is the backbone of a country and is believed to be the key to a developed nation. Education makes one self-reliant and develops one's self-confidence as knowledge is believed to be power.</p>
        <p>Education is like a key that opens doors to a world of knowledge. It helps us learn new things, like how to read, write, and count. It also teaches us important lessons about being good people, by showing us how to share, be kind, and respect others.</p>
        <p>Education is not just about books and schools, it’s also about learning from our experiences, family, and friends. So, when we study hard and learn, it’s like we’re building a big, strong house of knowledge in our minds. This knowledge helps us make good choices and reach our dreams.</p>
        
     </div>
    </div>
  )
}

export default About