import React from 'react'

const AddToFavouritesButton = React.createClass({

  componentDidMount () {
    componentHandler.upgradeDom()
  },

  componentDidUpdate () {
    componentHandler.upgradeDom()
  },

  isFavorite (id) {
    return this.props.favorites.indexOf(id) > -1
  },

  render () {
    return (
      <div>
        <button id='add-to-favorites'
          className={'mdl-button mdl-js-button mdl-button--icon videos-list__button-favorite' +
            (this.isFavorite(this.props.id) ? ' is-active' : '')}
          onClick={(evt) => { evt.stopPropagation(); this.props.toggleFavorite(this.props.id) }}>
          <i className='material-icons'>favorite</i>
        </button>
        <div className='mdl-tooltip' data-mdl-for='add-to-favorites'>
          { this.isFavorite(this.props.id) ? 'Remove from my favorites' : 'Add to my favorites' }
        </div>
      </div>
    )
  },

  propTypes: {
    id: React.PropTypes.string,
    favorites: React.PropTypes.array,
    toggleFavorite: React.PropTypes.func
  }
})

export default AddToFavouritesButton
