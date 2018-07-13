import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./app.scss";

const About = () => (
  <div>
    <h2>About info...</h2>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Hello, Webpack 4 & React!</h2>
          <h2>Time: {this.state.date.toLocaleTimeString()}</h2>

          <Link to="/">Go to homepage</Link>
          <br />
          <Link to="/about">Go to about</Link>

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
