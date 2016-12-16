import React from 'react'

const LAYOUT_ID = 'mdl-layout'

const LayoutClass = React.createClass({
  componentDidMount () {
    this.layout = document.querySelector('#' + LAYOUT_ID)
    this.layout.classList.add(this.props.name)
  },

  componentWillUnmount () {
    this.layout.classList.remove(this.props.name)
  },

  render () {
    return null
  },

  propTypes: {
    name: React.PropTypes.string
  }
})

export default LayoutClass
