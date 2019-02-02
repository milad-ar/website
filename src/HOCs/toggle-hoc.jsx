import * as React from "react";

const toggleHOC = Component =>
  class extends React.Component<Object, { on: boolean }> {
    state = { on: false };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      return (
        <Component {...this.props} on={this.state.on} toggle={this.toggle} />
      );
    }
  };

export default toggleHOC;