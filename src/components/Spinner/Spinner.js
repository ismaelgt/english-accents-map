import React from 'react'

class Spinner extends React.Component {
  componentDidMount () {
    componentHandler.upgradeDom()
  }

  render () {
    return (
      <div className='loading-indicator'>
        <div ref='spinner' className='mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active' />
      </div>
    )
  }
}

export default Spinner
