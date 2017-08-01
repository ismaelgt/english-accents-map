import React from 'react'

const LAYOUT_ID = 'mdl-layout'

class LayoutClass extends React.Component {
  componentDidMount () {
    this.layout = document.querySelector('#' + LAYOUT_ID)
    this.layout.classList.add(this.props.name)
  }

  componentWillUnmount () {
    this.layout.classList.remove(this.props.name)
  }

  render () {
    return null
  }
}

LayoutClass.propTypes = {
  name: React.PropTypes.string
}

export default LayoutClass
