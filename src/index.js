import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./app.scss";

const About = () => (
  <div>
    <h2>About info...</h2>
  </div>
);

const User = ({ match }) => (
  <div>
    <h2>User Name: {match.params.name} </h2>
  </div>
);

const Event = ({ match }) => (
  <div>
    <h2>Event ID: {match.params.id} </h2>
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

          <ul>
            <li>
              <Link to="/">Go to homepage</Link>
            </li>
            <li>
              <Link to="/about">Go to about</Link>
            </li>
            <li>
              <Link to="/users/Foo">User: Foo</Link>
            </li>
            <li>
              <Link to="/users/Bar">User: Bar</Link>
            </li>
            <li>
              <Link to="/events/123">Event: 123</Link>
            </li>
            <li>
              <Link to="/events/456">Event: 456</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/users/:name" component={User} />
            <Route path="/events/:id" component={Event} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
