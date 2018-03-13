import React from 'react'
import { Link } from 'react-router-dom'

const Jumbo = () => (
  <div className="jumbo">
    <div>
      Social
    </div>
    <div>
      <h1>K. Fryauff</h1>
      <h5>Discover . Design . Develop . Deploy</h5>
      <div>
        <Link to="/projects">Explore my work</Link>
      </div>
    </div>
    <img src="/dist/assets/images/bam_image.png" alt="" className="bam"/>
  </div>
)

export default Jumbo
