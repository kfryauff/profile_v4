import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import jquery from 'jquery'
import jsdom from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

import reducers from '../src/reducers'


const { JSDOM } = jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>')

// set global jsdom vars
global.document = dom.window.document
global.window = global.document.defaultView

// prevent jquery from attempting to reach out to the dom
const $ = jquery(global.window)

// * renderComponent helper renders a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance))
}

// * replace jquery simulate with simulate from ReactTestUtils
$.fn.simulate = function(eventName, value) {
  // this --> reference to element; ex: div in $('div').simulate()
  if (value) this.val(value)
  ReactTestUtils.Simulate[eventName](this[0])
}

// * setup chai-jquery
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }
