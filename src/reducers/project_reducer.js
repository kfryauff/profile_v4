import projects from '../../assets/data/projects'

const DEFAULT_STATE = {
  all: projects,
  featured: projects.filter(p => p.featured),
  filtered: projects,
}

export default (state = DEFAULT_STATE, action) => {
  return state
}
