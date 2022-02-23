import "./work.css"
import Card from '../card/Card'
import {works} from "../../data"

const Work = () => {
  return (
      <div className="w">
          <div className="w-title-wrapper">
            <div className="w-bg"></div>
            <div className="w-title">Works</div>
          </div>
          <p className="w-desc">I'm skilled in software development include both the frontend and the backend. Here are some previous works, some are my course works while most are my personal projects after class.</p>
          <div className="w-works">
              {works.map((item)=>(
                <Card key={item.id} img={item.img} link={item.link}/>
              ))}
          </div>
      </div>
  )
}

export default Work