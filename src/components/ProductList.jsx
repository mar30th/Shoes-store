import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
            {this.props.data.map((item) => (
                <div key={item.id} className="col-3">
                    <ProductItem prod={item}
                    onAddToCart={this.props.onAddToCart}
                    setSelectedProduct={this.props.setSelectedProduct}
                    onShowDetail={this.props.onShowDetail}
                    />
                </div>
            ))}
        </div>
      </div>
    )
  }
}
