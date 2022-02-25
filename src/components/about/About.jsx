import "./about.css"
import Photo from "../../img/Photo.JPG"
import { IoFootballOutline } from "react-icons/io5"
import { BsAward } from "react-icons/bs"
import { ThemeContext } from '../../context'
import { useContext } from "react"

const About = () => {
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a" id="about">
        <div className="a-left">
            <div className="a-card bg" style={{backgroundColor:darkMode?"#333":"#999"}}></div>
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
                <li className="a-desc-item">MSc of Software Engineering with a Professional placement year, Cardiff University. (09/2021-09/2023)</li>
                <li className="a-desc-item">BSc of Electronic Information Engineering, Shanghai Maritime University. (09/2017-06/2021)</li>
                <li className="a-desc-item">Intern of Frontend Developer, Shanghai, China (02/2020-04/2020)</li>
                <li className="a-desc-item">Intern of Data Analyst, Shanghai, China (07/2020-09/2020)</li>
            </ul>
            <div className="a-award">
                <div className="a-award-wrapper">
                    <IoFootballOutline className="a-award-img" />
                    <div className="a-award-texts">7th in Shanghai University Football League, 2021</div>
                </div>
                <div className="a-award-wrapper">
                    <BsAward className="a-award-img" />
                    <div className="a-award-texts">Third class scholarship of Shanghai Maritime University, 2020</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About