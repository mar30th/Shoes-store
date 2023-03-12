import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div style={{
        backgroundColor: "rgba (0,0,0,0.5)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "50%",
      }} className='d-flex justify-content-center align-items-center bg-white shadow rounded'>
        <span
          onClick={this.props.onHideDetail}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          className="border rounded-circle d-flex justify-content-center align-items-center"
        >
          X
        </span>
        <div className="row">
          <div className="col-5">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-7">
            <h3>Name: {name}</h3>
            <h3>Price: ${price}</h3>
            <p>Description: {description}</p>
            <p>Inventory: {quantity}</p>
          </div>
        </div>
      </div>
    );
  }
}
