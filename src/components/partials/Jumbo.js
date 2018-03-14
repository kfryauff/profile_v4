import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function renderSocialMediaIcon(media) {
  return (
    <a href={media.link} target={media.target}>
      <img src={`../../../dist/${media.image}`} className="icon" />
    </a>
  )
}

const Jumbo = ({ profile }) => (
  <div className="jumbo">
    <div className="social-media">
      {_.values(profile.socialMedia).map(m => renderSocialMediaIcon(m))}
    </div>
    <div>
      <h1>{profile.name}</h1>
      <h5>{profile.tag}</h5>
      <div>
        <Link to="/projects">Explore my work</Link>
      </div>
    </div>
    <img src="/dist/assets/images/bam_image.png" alt="" className="bam"/>
  </div>
)

function mapStateToProps(state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(Jumbo)
