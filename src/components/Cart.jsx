import React, { Component } from "react";

export default class Cart extends Component {
  calcTotal() {
    let total = 0;
    this.props.dataCart.forEach(item => {
      total += item.product.price * item.quantity;
    })
    return total;
  }
  
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba (0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="position-relative bg-white shadow rounded-lg p-4 w-75">
          <span
            onClick={this.props.onHideCard}
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
          <table className="table">
            <thead>
              <tr>
                <th>INX</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dataCart.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.product.name}</td>
                  <td>
                    <img style={{width: 100}} src={item.product.image} alt="" />
                  </td>
                  <td>
                    <button onClick={() => this.props.onMinus(this.props.dataCart[i].product.id)} className="btn btn-info"> - </button>
                    <i className="mx-3">{item.quantity}</i>
                    <button onClick={() => this.props.onPlus(this.props.dataCart[i].product.id)} className="btn btn-info"> + </button>
                  </td>
                  <td>{item.product.price}</td>
                  <td>{item.product.price * item.quantity}</td>
                  <td>
                    <button onClick={() => {this.props.onDeleteCart(this.props.dataCart[i].product.id)}} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="7">
                  <h4 className="text-end">Total: {this.calcTotal()}$</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.props.onCheckOut} className="btn btn-info">Check out</button>
        </div>
      </div>
    );
  }
}
