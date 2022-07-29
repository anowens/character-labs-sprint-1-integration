import * as React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
// import Frame1 from "../../../../static/frame-1.png"


// static\frame - 1.png
const Cara = () => (
  <Layout>
   <Parallax pages={3}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      
      <About offset={1} factor={1} />
      <Contact offset={3} factor={1} />
    </Parallax>
    
  </Layout>
)
{/* <div>
      <Parallax pages={3}>
        <ParallaxLayer offset={0}
          style={{
            backgroundColor: 'pink'
          }}>
            <img src={url({frame-1})} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <p>frame #1</p>
          </ParallaxLayer> 
        <Projects offset={1} factor={2} />
        <ParallaxLayer offset={1}
        style={{
            backgroundColor: 'orange'
          }}> 
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <p>frame #2</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2}
        style={{
            backgroundColor: 'blue'
          }}> 
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <p>frame #3</p>
        </ParallaxLayer>
      </Parallax>

    </div> */}
export default Cara
