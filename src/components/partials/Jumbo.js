import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

function renderSocialMediaIcon(media, key) {
  return (
    <a href={media.link} target={media.target}>
      <img src={`../../../dist/${media.image}`} className="icon" data-for={key} data-tip />
      <ReactTooltip
        id={key}
        className="tooltip"
        place="right"
        type="dark"
        effect="solid"
      >
        {media.label}
      </ReactTooltip>
    </a>
  )
}

const Jumbo = ({ profile }) => (
  <div className="jumbo">
    <div className="social-media">
      {_.keys(profile.socialMedia).map(key => renderSocialMediaIcon(profile.socialMedia[key], key))}
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
