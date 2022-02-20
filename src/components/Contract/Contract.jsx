import "./contract.css"
import Football from '../../img/Football.png'
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
                        <FaEnvelopeSquare className="c-info-icon"/>
                        <FaInstagramSquare className="c-info-icon"/>
                        <FaGithubSquare className="c-info-icon"/>
                        <FaLinkedin className="c-info-icon"/>
                    </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className="c-desc"><strong>Do you have any questions or suggestions?</strong> Always feel free to contract me, please.</p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input type="text" placeholder="Name" name="user_name"/>
                      <input type="text" placeholder="Subject" name="user_subject"/>
                      <input type="text" placeholder="Email" name="user_email"/>
                      <textarea name="message"  placeholder="Message" rows="5"></textarea>
                      <button>Submit</button>
                      {done && "Thank you..."}
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contract