import React, { Component } from "react";
import Cart from "./Cart";
import ShoesData from "./data.json";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class Home extends Component {
  data = ShoesData;
  state = {
    showDetail: false,
    showCart: false,
    selectedProduct: null,
    cart: [],
  };

  setSelectedProduct = (prod) => {
    console.log(prod);
    this.setState({
      selectedProduct: prod,
    });
  };

  handleDeleteCart = (id) => {
    let cloneCart = [...this.state.cart];
    for (let i in cloneCart) {
      if (cloneCart[i].product.id === id) {
        cloneCart.splice(i, 1);
      }
      this.setState({
        cart: cloneCart,
      });
    }
  };

  handleCheckOut = () => {
    this.setState({
      cart: [],
    });
  };

  handleShowCart = () => {
    this.setState({
      showCart: true,
    });
  };

  handleHideCart = () => {
    this.setState({
      showCart: false,
    });
  };

  handleAddToCart = (prod) => {
    const cloneCart = [...this.state.cart];
    const foundProduct = cloneCart.find((item) => {
      return item.product.id === prod.id;
    });
    if (!foundProduct) {
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    } else foundProduct.quantity += 1;

    this.setState({
      cart: cloneCart,
    });
    alert("Product added");
  };

  handlePlus = (id) => {
    const cloneCart = [...this.state.cart];
    for (let i in cloneCart) {
      if (cloneCart[i].product.id === id) {
        cloneCart[i].quantity += 1;
      }
      this.setState({
        cart: cloneCart,
      });
    }
  };

  handleMinus = (id) => {
    const cloneCart = [...this.state.cart];
    for (let i in cloneCart) {
      if (cloneCart[i].product.id === id && cloneCart[i].quantity > 1) {
        cloneCart[i].quantity -= 1;
      } else if (
        cloneCart[i].product.id === id &&
        cloneCart[i].quantity === 1
      ) {
        cloneCart.splice(i, 1);
      }
      this.setState({
        cart: cloneCart,
      });
    }
  };
  countCart = () => {
    let total = 0;
    this.state.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  handleShowDetail = () => {
    this.setState({
      showDetail: true,
    });
  };

  handleHideDetail = () => {
    this.setState({
      showDetail: false,
    });
  };

  render() {
    console.log(this.state.cart);
    return (
      <div>
        <h1 className="p-3 bg-dark text-white">My Shoes Store</h1>
        <div className="text-center">
          <button onClick={this.handleShowCart} className="btn btn-success">
            Cart ({this.countCart()})
          </button>
        </div>
        <ProductList
          data={this.data}
          setSelectedProduct={this.setSelectedProduct}
          onAddToCart={this.handleAddToCart}
          onShowDetail={this.handleShowDetail}
        />
        {this.state.showDetail
          ? this.state.selectedProduct && (
              <ProductDetail selectedProduct={this.state.selectedProduct} onHideDetail={this.handleHideDetail}/>
            )
          : null}
        {this.state.showCart && (
          <Cart
            dataCart={this.state.cart}
            onHideCard={this.handleHideCart}
            onCheckOut={this.handleCheckOut}
            onDeleteCart={this.handleDeleteCart}
            onPlus={this.handlePlus}
            onMinus={this.handleMinus}
          />
        )}
      </div>
    );
  }
}
