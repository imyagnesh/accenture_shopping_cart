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
      users: [],
    };
    // fetch(user data) -> store to state -> X

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
      const res = await axiosInstance.get("/api/product");
      console.log(res);
      // 2. set new state value
      this.setState({
        users: res,
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

  callMe = () => {
    console.log(this.state.greet);
  };

  render() {
    const { users } = this.state;
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
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.productName}</td>
                  <td>{user.description}</td>
                  <td>{user.price}</td>
                  <td>
                    <button type="button">Add To Cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* {users.map((user) => {})} */}
      </div>
    );
  }
}

export default Home;
