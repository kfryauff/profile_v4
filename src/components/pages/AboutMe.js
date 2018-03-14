import React from 'react'
import { connect } from 'react-redux'

const AboutMe = ({ profile }) => (
  <div className="about-me">
    <h1>{profile.name}</h1>

  </div>
)

function mapStateToProps(state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(AboutMe)
