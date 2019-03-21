import * as React from "react";
import ReactDOM from "react-dom";

import Assumptions from "./Assumptions";
import OngoingCosts from "./OngoingCosts";
import Calculations from "./Calculations";
import Explanation from "./Explanation";

import * as Reducer from "./reducer";

import "./styles.scss";

import { assumptions, ongoingCosts } from "./defaultState";

function App() {
  const [state, dispatch] = React.useReducer(Reducer.reducer, {
    assumptions,
    ongoingCosts
  });

  return (
    <div id="annualCompoundCalculator">
      <h1 className="text-center">
        Buy-to-let
        <br />
        Property snowball
      </h1>
      <hr />
      <Assumptions
        onUpdate={assumptions =>
          dispatch({
            type: Reducer.UPDATE_ASSUMPTIONS,
            payload: assumptions
          })
        }
      />
      <hr />
      <OngoingCosts
        onUpdate={ongoingCosts =>
          dispatch({
            type: Reducer.UPDATE_ONGOINGCOSTS,
            payload: ongoingCosts
          })
        }
      />
      <hr />
      <Calculations {...state} />
      <hr />
      <Explanation />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
