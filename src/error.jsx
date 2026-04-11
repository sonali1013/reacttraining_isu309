import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ textAlign: "center", color: "red" }}>
           {this.state.message || "Something went wrong!"}
        </h2>
      );
    }

    return this.props.children;
  }
}