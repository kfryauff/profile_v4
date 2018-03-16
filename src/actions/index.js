import {
  FETCH_FEATURED_PROJECTS,
} from './types'

export function fetchFeaturedProjects(projects) {
  return {
    type: FETCH_FEATURED_PROJECTS,
    payload: projects.filter(p => p.featured)
  }
}
