import "./contract.css"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { FaEnvelopeSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";



const Contract = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mob81te', 'template_mdrggp8', formRef.current, 'user_CWC863QRqyqxs08D5kler')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
      <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-title">Touch base</h1>
                  <div className="c-info">
                    <div className="c-info-text">
                        I'd love to hear from you
                    </div>
                    <div className="c-info-icons">
                        <a href="mailto:GuY36@cardiff.ac.uk" t>
                            <FaEnvelopeSquare className="c-info-icon"/>
                        </a>
                        <a href="https://www.instagram.com/yyyun_k/">
                            <FaInstagramSquare className="c-info-icon"/>
                        </a>
                        <a href="https://github.com/YunaGu">
                            <FaGithubSquare className="c-info-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yun-gu-0932b11a5/">
                            <FaLinkedin className="c-info-icon"/>
                        </a>
                    </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className="c-desc"><strong>Do you have any questions or suggestions?</strong> Always feel free to contract me, please.</p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input type="text" placeholder="Your name" name="user_name" required/>
                      <input type="text" placeholder="Subject" name="user_subject" required/>
                      <input type="text" placeholder="Your Email" name="user_email" required/>
                      <textarea name="message"  placeholder="Message" rows="5" required></textarea>
                      <button>Submit</button>
                      {done && "Thank you..."}
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contract