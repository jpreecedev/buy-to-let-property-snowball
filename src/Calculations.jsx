import * as React from "react";

import { variables } from "./defaultState";
import snowball from "./snowball";

function toNumber(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Calculations({ assumptions, ongoingCosts }) {
  const { purchasesPerYear, timespan } = variables;

  const { monthlyIncome, overallProfit, cashInvested, roi, yoy } = snowball({
    assumptions,
    ongoingCosts,
    purchasesPerYear,
    timespan
  });

  return (
    <>
      <h2>Calculations</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly income (Year {timespan}): </td>
            <td className="align-right">
              {"£"}
              {toNumber(monthlyIncome)}
            </td>
          </tr>
          <tr>
            <td>Overall Profit: </td>
            <td className="align-right">
              {"£"}
              {toNumber(overallProfit)}
            </td>
          </tr>
          <tr>
            <td>Cash Invested: </td>
            <td className="align-right">
              {"£"}
              {toNumber(cashInvested)}
            </td>
          </tr>
          <tr>
            <td>Return On Investment: </td>
            <td className="align-right">
              {toNumber(roi)}
              {"%"}
            </td>
          </tr>
          <tr>
            <td>Year On Year: </td>
            <td className="align-right">
              {toNumber(yoy)}
              {"%"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calculations;
