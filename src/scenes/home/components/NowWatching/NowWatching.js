import React from 'react'
import './styles.scss'

const NowWatching = React.createClass({

  render () {
    const { selectedAccent, selectedCountry, videosOpen } = this.props

    return (
      videosOpen
      ? (
        <span className='current-selection'>
          Now watching: { selectedAccent ? `${selectedAccent.name} (${selectedCountry.name})` : '' }
        </span>
      )
      : null
    )
  },

  propTypes: {
    selectedCountry: React.PropTypes.object,
    selectedAccent: React.PropTypes.object,
    videosOpen: React.PropTypes.bool
  }
})

export default NowWatching
