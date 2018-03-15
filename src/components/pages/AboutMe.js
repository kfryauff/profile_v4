import React from 'react'
import { connect } from 'react-redux'

const AboutMe = ({ profile }) => (
  <section className="about-me">
    <figure className="profile-pic">
      <img src={profile.image} alt="about me"/>
    </figure>
    <article>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
    </article>
  </section>
)

function mapStateToProps(state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(AboutMe)
