import React from "react";
import ReactDOM from "react-dom";

import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h2>Hello, Webpack 4 & React!</h2>
        <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
