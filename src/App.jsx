import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import MyFooter from './components/myFooter/MyFooter'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'
import { useContext } from "react"
import MyNav from './components/myNav/MyNav'
import Up from './components/up/Up'
import "./app.css"

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode?"#222":"#fff", color:darkMode?"#fff":"#222"}}>
        <MyNav/>
        <div className="float">
          <Toggle/>
          <Up/>
        </div>
        <Intro/>
        <About/>
        <Contact/>
        <MyFooter/>
    </div>
  )
}

export default App