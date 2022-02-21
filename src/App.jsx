import About from './components/about/About'
import Contract from './components/contract/Contract'
import Intro from './components/intro/Intro'
import MyFooter from './components/myFooter/MyFooter'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'
import { useContext } from "react";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{backgroundColor:darkMode?"#222":"#fff", color:darkMode?"#fff":"#222"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Contract/>
      <MyFooter/>
    </div>
  )
}

export default App