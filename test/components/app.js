import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'


describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('should render a main navigation', () => {
    expect(component.find('.main-navigation')).to.exist
  })
})
