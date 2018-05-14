import React, { Component, PropTypes } from 'react'
import CategoryList from './category-list'
import CategoryDataSource from './category-data-source'

class CategoryPage extends Component {
  static propTypes = {
    awsLogin: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.categoriesLoaded = this.categoriesLoaded.bind(this)
  }

  categoriesLoaded(categories) {
    this.setState({
      categoryList: categories.sort((l, r) => l.name.localeCompare(r.name)),
    })
  }

  render() {
    return (
      <div>
        <h3><em>Categories</em></h3>
        <CategoryList className="categoryList" categories={this.state.categoryList} />
        <CategoryDataSource awsLogin={this.props.awsLogin} categoriesLoaded={this.categoriesLoaded} />
        <h3><em>Shopping Cart</em></h3>
      </div>
    )
  }
}

export default CategoryPage
