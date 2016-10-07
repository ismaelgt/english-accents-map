import React from 'react'
import styles from './PageLayout.scss'

export default class PageLayout extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        {this.props.children}
      </div>
    )
  }
}
