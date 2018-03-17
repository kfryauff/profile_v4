import React from 'react'
import { connect } from 'react-redux'

import ProjectSummaryExpandedList from '../projects/ProjectSummaryExpandedList'


const Landing = ({ featured }) => (
  <div className="landing">
    <article className="section">
      <p>Illum do ingeniis ad culpa te pariatur ea sunt possumus, ubi sint ingeniis
      instituendarum ab tempor exercitation senserit culpa mandaremus te occaecat nam
      multos quibusdam se velit a laboris iis sint, nulla graviterque mandaremus illum
      vidisse, e export fugiat aliqua senserit. Ullamco philosophari non excepteur,
      fabulas tamen excepteur, mandaremus quae ullamco cupidatat an enim ne aut irure
      appellat.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, eaque minima quam voluptas maxime quia itaque suscipit? Sapiente ullam eveniet, ipsum, necessitatibus doloribus, ipsam hic, tempore iste culpa odio dolor?</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, eum! Deleniti aliquid quibusdam perspiciatis rem! Quos, tempore voluptas accusantium, in est accusamus, quidem aliquid sapiente saepe molestiae nesciunt molestias nobis!</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia mollitia, corporis nostrum sequi ab dolor laborum aliquam reiciendis iure. Quisquam ad officiis eveniet aperiam nam laboriosam labore corporis alias asperiores.</p>
    </article>

    {featured.map(project => <ProjectSummaryExpandedList project={project} />)}
  </div>
)

function mapStateToProps(state) {
  return {
    featured: state.projects.featured
  }
}

export default connect(mapStateToProps)(Landing)
