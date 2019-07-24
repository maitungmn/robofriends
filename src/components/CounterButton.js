import React, { PureComponent } from "react";

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Prevent H1 from reload twice when data comes
  shouldComponentUpdate(nextProps, nextState) {
    return !!(this.state.count !== nextState.count)
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("Count Button")
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
