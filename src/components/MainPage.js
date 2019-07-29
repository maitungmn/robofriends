import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV)
    this.props.onRequestRobots();
  }

  filterRobots = () => {
      return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      });
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <div className="tc">
        <h1 className="f1">Loading</h1>
      </div>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
