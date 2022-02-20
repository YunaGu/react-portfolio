import About from './components/about/About'
import Contract from './components/contract/Contract'
import Intro from './components/intro/Intro'
import MyFooter from './components/myFooter/MyFooter'

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Contract/>
      <MyFooter/>
    </div>
  )
}

export default App