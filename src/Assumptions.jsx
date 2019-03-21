import * as React from "react";
import { assumptions } from "./defaultState";

import Tooltip from "./Tooltip";

function Assumptions({ onUpdate }) {
  const [state, setState] = React.useState(assumptions);

  const updateState = assumptions => {
    setState(assumptions);
    onUpdate(assumptions);
  };

  const {
    purchasePrice,
    rental,
    loanToValue,
    repaymentTerm,
    stampDuty,
    interestRate,
    legalFees,
    otherCosts,
    firstYearLettableMonths
  } = state;

  return (
    <section>
      <h2>Assumptions</h2>
      <div className="flex">
        <label htmlFor="purchasePrice">
          <Tooltip text="Price paid for the property">Purchase Price (£)</Tooltip>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            value={purchasePrice}
            onChange={({ target }) =>
              updateState({ ...state, purchasePrice: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="rental">
          <Tooltip text="Amount the property will rent for, per month">Rental (£)</Tooltip>
          <input
            type="number"
            id="rental"
            name="rental"
            value={rental}
            onChange={({ target }) => updateState({ ...state, rental: Number(target.value) })}
          />
        </label>
        <label htmlFor="loanToValue">
          <Tooltip text="The amount, as a percentage, you can lend against the property">
            Loan To Value (%)
          </Tooltip>
          <input
            type="number"
            id="loanToValue"
            name="loanToValue"
            value={loanToValue}
            onChange={({ target }) => updateState({ ...state, loanToValue: Number(target.value) })}
          />
        </label>
      </div>
      <div className="flex">
        <label htmlFor="repaymentTerm">
          <Tooltip text="The length of the mortgage (interest only) before the mortgage has to be settled.">
            Repayment Term (years)
          </Tooltip>
          <input
            type="number"
            id="repaymentTerm"
            name="repaymentTerm"
            value={repaymentTerm}
            onChange={({ target }) =>
              updateState({ ...state, repaymentTerm: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="stampDuty">
          <Tooltip text="Stamp Duty Land Tax (SDLT) to be paid upon completion (usually 3%)">
            Stamp Duty (%)
          </Tooltip>
          <input
            type="number"
            id="stampDuty"
            name="stampDuty"
            value={stampDuty}
            onChange={({ target }) => updateState({ ...state, stampDuty: Number(target.value) })}
          />
        </label>
        <label htmlFor="interestRate">
          <Tooltip text="Interest only mortgage rate">Interest Rate (%)</Tooltip>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={({ target }) => updateState({ ...state, interestRate: Number(target.value) })}
          />
        </label>
      </div>
      <div className="flex">
        <label htmlFor="legalFees">
          <Tooltip text="Solicitors fees, including surveys and searches">Legal Fees (£)</Tooltip>
          <input
            type="number"
            id="legalFees"
            name="legalFees"
            value={legalFees}
            onChange={({ target }) => updateState({ ...state, legalFees: Number(target.value) })}
          />
        </label>
        <label htmlFor="otherCosts">
          <Tooltip text="Miscellaneous expenses">Other Costs (£)</Tooltip>
          <input
            type="number"
            id="otherCosts"
            name="otherCosts"
            value={otherCosts}
            onChange={({ target }) => updateState({ ...state, otherCosts: Number(target.value) })}
          />
        </label>
        <label htmlFor="firstYearLettableMonths">
          <Tooltip text="How many months do you expect to be able to rent the property in the first year of ownership?">
            First Year Lettable Months
          </Tooltip>
          <input
            type="number"
            id="firstYearLettableMonths"
            name="firstYearLettableMonths"
            value={firstYearLettableMonths}
            onChange={({ target }) =>
              updateState({ ...state, firstYearLettableMonths: Number(target.value) })
            }
          />
        </label>
      </div>
    </section>
  );
}

export default Assumptions;
