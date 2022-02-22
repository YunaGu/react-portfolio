import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import MyFooter from './components/myFooter/MyFooter'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'
import { useContext } from "react"
import MyNav from './components/myNav/MyNav'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode?"#222":"#fff", color:darkMode?"#fff":"#222"}}>
      <Router>
        <MyNav/>
        <Routes>
          <Route path="/" exact component={Intro}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Routes>
      </Router>
      <Toggle/>
      <Intro/>
      <About/>
      <Contact/>
      <MyFooter/>
    </div>
  )
}

export default App