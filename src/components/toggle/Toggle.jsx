import "./toggle.css"
import Sun from "../../img/Sun.png"
import Moon from "../../img/Moon.png"
import { useContext } from 'react'
import { ThemeContext } from "../../context"


const Toggle = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
   
    const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
}
  return (
    <div className="t" style={{border:darkMode?"1px solid #f7a01b":"1px solid #333"}}>
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 1:26}}></div>
    </div>
  )
}

export default Toggle