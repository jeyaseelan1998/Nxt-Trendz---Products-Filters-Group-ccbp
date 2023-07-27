import {BsSearch, BsStarFill, BsStar} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const { filterByCategory,
    filterByRating,
    updateSearchInput,
    clearFilters,
    getProducts } = props

    const onChangeInput = event => updateSearchInput(event.target.value)

    const onSubmitHandler = event => {
      event.preventDefault()
      getProducts()
    }

    const onClickCategory = categoryId => {
      filterByCategory(categoryId)
    }

    const onClickRating = (ratingId) => filterByRating(ratingId)

    const onclickClearBtn = () => clearFilters()

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
    <form className='search-input-container' onSubmit={onSubmitHandler}>
      <input type='search' placeholder='Search' className='search-input' onChange={onChangeInput} value={searchInput}/>
      <BsSearch className='icon' />
    </form>
  )}

  const renderCategoryButtons = () => {
    const {categoryOptions} = props

    return (
      <ul className='category-options-list'>
        {
          categoryOptions.map(category => (
            <li>
              <button className='category-button' onClick={() => onClickCategory(category.categoryId)}>{category.name}</button>
            </li>
          ))
        }
      </ul>
    )
  }

  const renderRatingButtons = () => {
    const {ratingsList} = props
    return (
    <ul className='rating-buttons'>
      {
        ratingsList.map(rating => (
          <li>
            <button className='rating-button' onClick={() => onClickRating(rating.ratingId)}>
              <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} className='rating-image'/>
              <p>& up</p>
            </button>
          </li>
        ))
      }
    </ul>
  )}

  return (
    < div className="filters-group-container" >
      {renderSearchInput()}
      <h1 className='form-group-heading'>Category</h1>
      {renderCategoryButtons()}
      <h1 className='form-group-heading'>Rating</h1>
      {renderRatingButtons()}
      <button onClick={onclickClearBtn}>Clear Filters</button>
    </div >
  )
}

export default FiltersGroup
