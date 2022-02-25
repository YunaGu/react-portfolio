import "./card.css"
import { ThemeContext } from '../../context'
import { useContext } from "react"

const Card = ({img, title, link}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="ca" style={{border:darkMode?"1px solid #333":"1px solid #999"}}>
      <div className="ca-browser" style={{backgroundColor:darkMode?"#333":"#999"}}>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
      </div>
      <div className="ca-text-wrapper">
        <p className="ca-text">{title}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="ca-details">
        <img src={img} alt="" className="ca-img"/>      
      </a>
    </div>
  )
}

export default Card