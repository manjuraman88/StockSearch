import React from "react";
import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import "../../stylesheets/Home.scss";
import AppHeader from "../nav/AppHeader";
const MainComponent = (props) => {
  const history = useHistory();

  useEffect(() => {}, [history]);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="description" content="Robo wire" />
      <title>Robo tire web</title>

      <div className="robo-tire-container">
        <AppHeader />
        <Switch>
          <Route
            path="/"
            exact
            render={(routeProps) =>
              React.createElement(HomeComponent, {
                ...routeProps,
                ...props,
                location: window.location,
                history: history,
              })
            }
          />
        </Switch>
      </div>
    </div>
  );
};

export default MainComponent;
