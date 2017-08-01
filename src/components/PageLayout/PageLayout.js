import React from 'react'
import PropTypes from 'prop-types'
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
  children: PropTypes.node
}
