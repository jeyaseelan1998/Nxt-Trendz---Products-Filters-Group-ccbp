import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    filterByCategory,
    filterByRating,
    updateSearchInput,
    clearFilters,
    getProducts,
  } = props

  const onChangeEvent = event => {
    if(event.key === "Enter") {
      getProducts()
      return
    }
    updateSearchInput(event.target.value)
  }

  const onClickCategory = categoryId => {
    filterByCategory(categoryId)
  }

  const onClickRating = ratingId => filterByRating(ratingId)

  const renderCategoryButtons = () => {
    const {categoryOptions} = props

    return (
      <ul className="category-options-list">
        {categoryOptions.map(category => (
          <li>
            <p
              className="category-button"
              onClick={() => onClickCategory(category.categoryId)}
            >
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  const renderRatingButtons = () => {
    const {ratingsList} = props
    return (
      <ul className="rating-buttons">
        {ratingsList.map(rating => (
          <li>
            <button
              className="rating-button"
              onClick={() => onClickRating(rating.ratingId)}
            >
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                className="rating-image"
              />
              <p>& up</p>
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onKeyDown={onChangeEvent}
        />
        <BsSearch className="icon" />
        <button type="submit" className="submit-btn">
          submit
        </button>
      </div>
      <h1 className="form-group-heading">Category</h1>
      {renderCategoryButtons()}
      <h1 className="form-group-heading">Rating</h1>
      {renderRatingButtons()}
      <button
        onClick={clearFilters}
        type="button"
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
