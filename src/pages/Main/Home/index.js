import React, { PureComponent, createRef } from "react";
import axiosInstance from "../../../utils/axios";

// Mounting

// -> constructor -> only once
//      -> Based on prop value if you want to define state
//      -> to bind method
//      -> call api // ->

// -> getDerivedStateFromProps
//      -> based on new Props or old state if you derive new state value

// -> render
//      -> to render html

// -> componentDidMount
//      // -> access my dom elements
//      // -> register events
//      // -> fetch data

// Updating

// UnMounting

// Error

export class Home extends PureComponent {
  headerRef = createRef();

  // only once
  constructor(props) {
    super(props);

    // 1. set default state value
    this.state = {
      greet: `Hello, ${props.firstName}`,
      products: [],
      cart: [],
    };
    // fetch(product data) -> store to state -> X

    // fetch('visited home page at 6:30 IST')
  }

  1;
  // will call everytime when props or state value change
  static getDerivedStateFromProps(props, state) {
    return {
      fullName: `${props.firstName} ${props.lastName}`,
      random: state.counter === 10 ?? 0,
    };
  }

  // only once
  async componentDidMount() {
    try {
      const [products, cartDetails] = await Promise.all([
        axiosInstance.get("/api/product"),
        axiosInstance.get("/api/cart"),
      ]);
      // 2. set new state value
      this.setState({
        products: products,
        cart: cartDetails,
      });
    } catch (error) {
      console.log("error");
    }

    // document.addEventListener("copy", () => {
    //   console.log("copied");
    // });

    // console.log(document.getElementById("header")); // O(logN)
    // console.log(document.getElementsByClassName("header")); // O(N)
    // console.log(this.headerRef.current); O(1) -> best
  }

  addToCart = async (productId, quantity, cartId) => {
    try {
      await axiosInstance.post("/api/cart", {
        productId: productId,
        quantity: quantity,
        cartId,
      });
      const cart = await axiosInstance.get("/api/cart");
      this.setState({
        cart: cart,
      });
    } catch (error) {}
  };

  checkout = async () => {
    await axiosInstance.delete("/api/cart");
    const cart = await axiosInstance.get("/api/cart");
    this.setState({
      cart: cart,
    });
  };

  callMe = () => {
    console.log(this.state.greet);
  };

  render() {
    const { products, cart } = this.state;
    return (
      <div>
        <h1 ref={this.headerRef}>Home Page</h1>
        {/* 3. display data */}
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const addedProduct = cart.find(
                (x) => x.productId === product._id
              );
              return (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    {addedProduct ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            this.addToCart(product._id, 1, addedProduct._id)
                          }
                        >
                          +
                        </button>
                        <span>{addedProduct.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            this.addToCart(product._id, -1, addedProduct._id)
                          }
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => this.addToCart(product._id, 1)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button type="button" onClick={this.checkout}>
          Checkout
        </button>
        {/* {products.map((product) => {})} */}
      </div>
    );
  }
}

export default Home;
