import { useState } from 'react'
import './ContactStyle.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message:''
    });
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, //Spread the previous state
            [name]: value //Update the specific field based on input name
        }));
    };

    

  return (
    <section className='contact'>
        <form action='https://formspree.io/f/xeoeykgl'
        method='POST'>
            <h2>Contact Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input 
                type="text" 
                className='field' 
                placeholder='Enter your name' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                required/>
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input 
                type="email" 
                className='field' 
                placeholder='Enter your email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                required/>
            </div>
            <div className="input-box">
                <label>Message</label>
                <textarea 
                name="message" 
                className='field message'  
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                
                />
            </div>
            <button type='submit'>Send</button>
        </form>
    </section>
  )
}

export default Contact