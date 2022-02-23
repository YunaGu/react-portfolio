import "./card.css"
import { ThemeContext } from '../../context'
import { useContext } from "react"

const Card = ({img, link}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="ca" style={{border:darkMode?"1px solid #333":"1px solid rgb(243, 242, 242"}}>
      <div className="ca-browser" style={{backgroundColor:darkMode?"#333":"rgb(243, 242, 242"}}>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
        <div className="ca-circle" style={{backgroundColor:darkMode?"#666":"#fff"}}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="ca-img" />
      </a>
    </div>
  )
}

export default Card