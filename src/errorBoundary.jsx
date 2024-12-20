import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h4 style={{ width: 150, margin: "100px auto" }}>
          Что-то пошло не так{" "}
        </h4>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
