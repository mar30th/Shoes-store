import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {name, image, price} = this.props.prod;
    return (
      <div className='card p-3 mb-4'>
        <img src={image} alt="" />
        <h5>{name}</h5>
        <p>Price: {price}</p>
        <div className='d-flex justify-content-center'>
            <button onClick={() => {this.props.setSelectedProduct(this.props.prod); this.props.onShowDetail()}} className='btn btn-danger me-3'>Detail</button>
            <button onClick={() => this.props.onAddToCart(this.props.prod)} className='btn btn-info'>Add to Cart</button>
        </div>
      </div>
    )
  }
}
