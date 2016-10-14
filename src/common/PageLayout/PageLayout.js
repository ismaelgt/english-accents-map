import React from 'react'
import './styles.scss'

export default class PageLayout extends React.Component {
  render () {
    return (
      <div className='page-wrapper'>
        {this.props.children}
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: React.PropTypes.node
}
