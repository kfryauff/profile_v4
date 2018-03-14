import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SocialMediaIcon from './SocialMediaIcon'


const Banner = ({ profile }) => (
  <div className="banner">
    <div className="social-media">
      {_.keys(profile.socialMedia).map(label =>
        <SocialMediaIcon media={profile.socialMedia[label]} label={label} key={label} />)}
    </div>
    <div>
      <h1>{profile.name}</h1>
      <address>
        <h5 className="profile-detail">{profile.email}</h5>
        <h5 className="profile-detail">{profile.location}</h5>
      </address>
      <Link to="/projects" className="btn">Explore my work</Link>
    </div>
    <img src="/dist/assets/images/bam_bg.png" alt="" className="background"/>
    <img src="/dist/assets/images/bam_image.png" alt="" className="bam"/>
  </div>
)

function mapStateToProps(state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(Banner)
