import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState('');
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "fd8f0238-88b3-452c-b1a9-3281557405f1");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          }).then ((res) => res.json());
      
      
          if (res.success) {
            console.log("success", res);
            setResult(res.message)
            event.target.reset();
          } else {
            console.log("Error", res);
            setResult(res.message);
          }
        };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact from or find our contact information below. your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><img src={mail_icon} alt=''/>Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
            <li><img src={location_icon} alt=''/>Bhangel sec-110, Noida<br/> 201304, Uttar pradesh</li>
          </ul>

        </div>
        <div className="contact-col">
         <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write Your message here</label>
            <textarea name='message' rows="6" placeholder='enter your message' required/>
            <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt=''/></button>
         </form>
         <span>{result}</span>
        </div>
        </div>


    
  )
}

export default Contact