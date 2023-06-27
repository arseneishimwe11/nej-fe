import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import { getProduct } from "./data/productData";
import Modal from "./components/Modal";
import axios from "axios";

class Amazon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productOnCart: [],
      cartOpen: false,
      totalPrice: 0,
      count:10
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCart = this.handleCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentDidMount() {
    // const products = [...getProduct()];
    axios.get("http://localhost:8000/swagger-ui/index.html")
    .then(product=>{
      this.setState({ products:product.data });
    })
  }

  handleAddToCart(product_id) {

    const getProduct = this.state.products.filter((p) => p.id === product_id);
    getProduct[0].isAddedToCart = false;
    const updateProductToCart = [...this.state.productOnCart, ...getProduct];

    // work on changing isAddedToCart to true
    const products = [...this.state.products];
    const index = this.state.products.findIndex((p) => p.id === product_id);

    products[index].isAddedToCart = true;

    // calculate total price

    let totalPrice = this.state.totalPrice;
    console.log(getProduct[0].price)
    totalPrice += (getProduct[0].price)*(getProduct[0].count);
    this.setState({ totalPrice });

    this.setState({ productOnCart: updateProductToCart, products, totalPrice });
  }

  handleCart() {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  }
  // handler for remove product from cart
  handleRemoveFromCart(product_id) {
    const productOnCart = [...this.state.productOnCart];
    const index = productOnCart.findIndex((p) => p.id === product_id);
    productOnCart[index].isAddedToCart = false;
    const updateProduct = productOnCart.filter((p) => p.id !== product_id);

    const getPrice = productOnCart[index].price;
    const currentTotalPrice = this.state.totalPrice;
    let updateTotalPrice = currentTotalPrice - getPrice;

    this.setState({
      productOnCart: updateProduct,
      totalPrice: updateTotalPrice,
    });
  }

  render() {
    const { cartOpen, products, productOnCart, totalPrice } = this.state;
    const { length: count } = this.state.productOnCart;
    return (
      <>
        <Navbar productCount={count} onHandleCart={this.handleCart} />
        <header>
          <h1 className="capitalize text-center text-2xl mt-2 text-pink-700 tracking-widest underline ">
            Buy desired product
          </h1>
        </header>
        <main className="px-4">
          <Products
            isCartOpen={cartOpen}
            products={products}
            onHandleAddToCart={this.handleAddToCart}
          />
          <Modal
            show={cartOpen}
            onHandleClose={this.handleCart}
            productCount={count}
            price={totalPrice}
          >
            <Cart
              cartProducts={productOnCart}
              onRemoveProduct={this.handleRemoveFromCart}
            />
          </Modal>
        </main>
      </>
    );
  }
}

export default Amazon;
