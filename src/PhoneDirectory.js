import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Anuj Sharma",
          phone: "3333333333",
        },
        {
          id: 2,
          name: "Rohit Sharma",
          phone: "7777777777",
        },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscriberList = this.state.subscribersList;
    if (subscriberList.length > 0) {
      newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscriberList.push(newSubscriber);
    this.setState({ subscriberList });
  };

  deleteSubscriberHandler = (subscriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach(function (subscriber, index) {
      if (subscriber.id === subscriberId) {
        subscriberIndex = index;
      }
    }, this);
    let newSubscribers = subscribersList;
    newSubscribers.splice(subscriberIndex, 1);
    this.setState({ subscribersList: newSubscribers });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList}
                deleteSubscriberHandler={this.deleteSubscriberHandler}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={({ history }, props) => (
              <AddSubscriber
                history={history}
                {...props}
                addSubscriberHandler={this.addSubscriberHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
