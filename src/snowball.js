function allocatePropertiesArray(purchasesPerYear, timespan) {
  const properties = [];
  for (let i = 0; i < purchasesPerYear * timespan; i++) {
    properties.push(new Array(timespan));
  }
  return properties;
}

function reduce(acc, current) {
  return {
    profit: acc.profit + current.profit,
    cashInvested: acc.cashInvested + current.cashInvested,
    roi: acc.roi + current.roi
  };
}

function getCalculation(assumptions, ongoingCosts, lettableMonths) {
  const mortgageAmount = assumptions.purchasePrice * (assumptions.loanToValue / 100);
  const deposit = (1 - assumptions.loanToValue / 100) * assumptions.purchasePrice;
  const stampDuty = assumptions.purchasePrice * (assumptions.stampDuty / 100);
  const mortgagePayment = (mortgageAmount * (assumptions.interestRate / 100)) / 12;
  const managementCosts = assumptions.rental * (ongoingCosts.managementFee / 100) * lettableMonths;
  const recurringCosts =
    ongoingCosts.yearlyRenewal + ongoingCosts.insurance + ongoingCosts.maintenance;
  const cashInvested = deposit + stampDuty + assumptions.legalFees + assumptions.otherCosts;
  const income = assumptions.rental * lettableMonths;
  const taxDeductableExpenses =
    managementCosts +
    recurringCosts +
    ongoingCosts.yearlyRenewal +
    ongoingCosts.insurance +
    ongoingCosts.maintenance;
  const nonTaxDeductable = mortgagePayment * lettableMonths;
  const tax = (income - taxDeductableExpenses + nonTaxDeductable) * (ongoingCosts.tax / 100);

  const profit = income - tax - nonTaxDeductable;
  const roi = profit / cashInvested;

  return {
    profit,
    cashInvested,
    roi: roi * 100
  };
}

function snowball({ assumptions, ongoingCosts, purchasesPerYear, timespan }) {
  const properties = allocatePropertiesArray(purchasesPerYear, timespan);
  let year = 0;

  // Property
  for (let i = 0; i < timespan; i++) {
    properties[i][year] = getCalculation(
      assumptions,
      ongoingCosts,
      assumptions.firstYearLettableMonths
    );
    // Year
    for (let j = i + 1; j < timespan; j++) {
      const calculation = getCalculation(assumptions, ongoingCosts, ongoingCosts.lettableMonths);
      calculation.cashInvested = 0;
      properties[i][j] = calculation;
    }

    year += 1;
  }

  const lastYear = properties.map(property => property[property.length - 1]).reduce(reduce);
  const allYears = properties.flat().reduce(reduce);

  return {
    monthlyIncome: lastYear.profit / 12,
    overallProfit: allYears.profit,
    cashInvested: allYears.cashInvested,
    roi: (allYears.profit / allYears.cashInvested) * 100,
    yoy: ((allYears.profit / allYears.cashInvested) * 100) / timespan
  };
}

export default snowball;
