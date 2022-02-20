import "./intro.css";
import Yungu from "../../img/Yungu.png"

const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Yun Gu</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Footballer</div>
              <div className="i-title-item">Musician</div>
            </div>
          </div>
          <div className="i-desc">
            <p>Currently I'm a postgraduate student @ <a href="https://www.cardiff.ac.uk/computer-science">Cardiff COMSC</a>. Welcome to my website :).</p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Yungu} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default intro