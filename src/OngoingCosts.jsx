import * as React from "react";
import { ongoingCosts } from "./defaultState";

import Tooltip from "./Tooltip";

function OngoingCosts({ onUpdate }) {
  const [state, setState] = React.useState(ongoingCosts);

  const updateState = ongoingCosts => {
    setState(ongoingCosts);
    onUpdate(ongoingCosts);
  };

  const { managementFee, yearlyRenewal, insurance, maintenance, lettableMonths, tax } = state;

  return (
    <section>
      <h2>Ongoing Costs</h2>
      <div className="flex">
        <label htmlFor="managementFee">
          <Tooltip text="The amount, as a percentage of the rent, for a management agent to manage the property (Per month)">
            Management Fee (%)
          </Tooltip>
          <input
            type="number"
            id="managementFee"
            name="managementFee"
            value={managementFee}
            onChange={({ target }) =>
              updateState({ ...state, managementFee: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="yearlyRenewal">
          <Tooltip text="The yearly cost of placing new tenants">Yearly Renewal (£)</Tooltip>
          <input
            type="number"
            id="yearlyRenewal"
            name="yearlyRenewal"
            value={yearlyRenewal}
            onChange={({ target }) =>
              updateState({ ...state, yearlyRenewal: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="insurance">
          <Tooltip text="Annual cost of insurance, including; Landlords insurance, contents insurance, buildings insurance etc">
            Insurance (£)
          </Tooltip>
          <input
            type="number"
            id="insurance"
            name="insurance"
            value={insurance}
            onChange={({ target }) => updateState({ ...state, insurance: Number(target.value) })}
          />
        </label>
      </div>
      <div className="flex">
        <label htmlFor="maintenance">
          <Tooltip text="The annual cost of maintenance">Maintenance (£)</Tooltip>
          <input
            type="number"
            id="maintenance"
            name="maintenance"
            value={maintenance}
            onChange={({ target }) => updateState({ ...state, maintenance: Number(target.value) })}
          />
        </label>
        <label htmlFor="lettableMonths">
          <Tooltip text="The number of months a property will let in a normal year">
            Lettable Months
          </Tooltip>
          <input
            type="number"
            id="lettableMonths"
            name="lettableMonths"
            value={lettableMonths}
            onChange={({ target }) =>
              updateState({ ...state, lettableMonths: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="tax">
          <Tooltip text="The tax rate on profits non tax-deductable profits">Tax (%)</Tooltip>
          <input
            type="number"
            id="tax"
            name="tax"
            value={tax}
            onChange={({ target }) => updateState({ ...state, tax: Number(target.value) })}
          />
        </label>
      </div>
    </section>
  );
}

export default OngoingCosts;
