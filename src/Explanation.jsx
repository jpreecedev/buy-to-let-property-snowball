import * as React from "react";

function Explanation() {
  return (
    <aside>
      <h2>Explanation</h2>
      <ul>
        <li>Based on purchasing 1 property per year for 5 years.</li>
        <li>
          Tax is based on 20% of profit after tax deducations.
          <br />
          (If you are a higher rate tax payer, this figure will be higher)
        </li>
        <li>Inflation is not accounted for.</li>
        <li>Capital growth is not accounted for.</li>
        <li>Assumptions are applied to every property.</li>
        <li>Mortgage is interest only, not repayment.</li>
      </ul>
    </aside>
  );
}

export default Explanation;
