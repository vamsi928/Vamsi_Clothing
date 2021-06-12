import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./ErrorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasErrored: true };
  };

  componentDidCatch = (error, info) => {
    console.log(error);
  };

  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer
          imageUrl={"https://i.imgur.com/yW2W9SC.png"}
        ></ErrorImageContainer>
        <ErrorImageText>Oops something went wrong</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
