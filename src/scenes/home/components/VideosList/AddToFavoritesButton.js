import React from 'react'

const AddToFavouritesButton = React.createClass({
  isFavorite (id) {
    return this.props.favorites.indexOf(id) > -1
  },
  render () {
    return (
      <button className={'mdl-button mdl-js-button mdl-button--icon' +
        (this.isFavorite(this.props.id) ? ' mdl-button--accent mdl-button--colored' : '')}
        onClick={() => { this.props.toggleFavorite(this.props.id) }}
      >
        <i className='material-icons'>favorite</i>
      </button>
    )
  },
  propTypes: {
    id: React.PropTypes.string,
    favorites: React.PropTypes.array,
    toggleFavorite: React.PropTypes.func
  }
})

export default AddToFavouritesButton
