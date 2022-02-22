import "./up.css"
import { IoArrowUp } from "react-icons/io5";
import { ThemeContext } from '../../context'
import { useContext } from "react"


const Up = () => {
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="u" style={{border:darkMode?"1px solid #f7a01b":"1px solid #333"}}>
        <a href="#home">        
            <IoArrowUp className="u-icon" style={{backgroundColor:darkMode?"#333":"#fff", color:darkMode?"#fff":"#333"}}/>
        </a>
    </div>
  )
}

export default Up