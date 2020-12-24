import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  render() {
    return (
      <div className="component-body-container">
        <Header heading="Phone Directory" />
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {this.props.subscribersList.map((sub) => {
          return (
            <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowSubscribers;