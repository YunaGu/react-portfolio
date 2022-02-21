import "./intro.css";
import Bulb from "../../img/Bulb.png"
import { MdOutlineDesignServices, MdOutlineSportsSoccer, MdOutlinePiano } from "react-icons/md"
import { HiCode } from "react-icons/hi"



const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Yun Gu</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                <HiCode/>
                <div className="i-title-text">Web Developer</div>
              </div>
              <div className="i-title-item">
                <MdOutlineDesignServices/>
                <div className="i-title-text">UI/UX Designer</div>
              </div>
              <div className="i-title-item">
                <MdOutlineSportsSoccer/>
                <div className="i-title-text">Footballer</div>
              </div>
              <div className="i-title-item">
                <MdOutlinePiano/>
                <div className="i-title-text">Musician</div>
              </div>
            </div>
          </div>
          <div className="i-desc">
            <p>Currently I'm a postgraduate student @ <a href="https://www.cardiff.ac.uk/computer-science" target="_blank" rel="noreferrer">Cardiff COMSC</a>. Welcome to my website :).</p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Bulb} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default intro