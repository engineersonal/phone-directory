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
          name: "Shilpa Bhat",
          phone: "8888888888",
        },
        {
          id: 2,
          name: "Srishti Gupta",
          phone: "9999999999",
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

  render() {
    // return <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;
    // <ShowSubscribers subscribersList={this.state.subscribersList} />;
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
