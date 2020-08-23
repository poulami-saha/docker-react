import React from "react";

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      like: false,
    };
  }
  handleCounter = () => {
    this.setState({ like: !this.state.like }, () => {
      if (this.state.like) {
        this.setState({ count: this.state.count + 1 });
      } else {
        this.setState({ count: this.state.count - 1 });
      }
    });
  };

  render() {
    return (
      <button
        onClick={this.handleCounter}
        className={`like-button ${this.state.like ? "liked" : ""}`}
      >
        Like | <span className="likes-counter">{this.state.count}</span>
      </button>
    );
  }
}

export default LikeButton;
