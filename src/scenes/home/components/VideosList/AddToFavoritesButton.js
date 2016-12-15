import React from 'react'

const AddToFavouritesButton = React.createClass({
  isFavorite (id) {
    return this.props.favorites.indexOf(id) > -1
  },
  render () {
    return (
      <button className={'mdl-button mdl-js-button mdl-button--icon videos-list__button-favorite' +
        (this.isFavorite(this.props.id) ? ' is-active' : '')}
        onClick={(evt) => { evt.stopPropagation(); this.props.toggleFavorite(this.props.id) }}
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
