import "./about.css"
import Photo from "../../img/Photo.JPG"
import { IoFootballOutline } from "react-icons/io5"
import { BsAward } from "react-icons/bs"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Photo} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <div className="a-right-wrapper">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                A designer who doesn't play football and the guitar is not a good programmer, hahaha ;-).
            </p>
            <ul className="a-desc">
                <li className="a-desc-item">MSc of Software Engineering with a Professional placement year, Cardiff University.</li>
                <li className="a-desc-item">BSc of Electronic Information Engineering, Shanghai Maritime University.</li>
                <li className="a-desc-item">Intern of Frontend Developer, Shanghai, China</li>
                <li className="a-desc-item">Intern of Data Analyst, Shanghai, China</li>
            </ul>
            <div className="a-award">
                <div className="a-award-wrapper">
                    <IoFootballOutline className="a-award-img" />
                    <div className="a-award-texts">7th in Shanghai University Football League 2021</div>
                </div>
                <div className="a-award-wrapper">
                    <BsAward className="a-award-img" />
                    <div className="a-award-texts">Third class scholarships, Shanghai Maritime University</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About