import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ Input }) {
  const finalCalculations = calculateInvestmentResults(Input);
  const initialInvestment =
    finalCalculations[0].valueEndOfYear -
    finalCalculations[0].annualInvestment -
    finalCalculations[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {finalCalculations.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialInvestment;

          const totalAmountInvested = yeardata.valueEndOfYear - totalInterest;
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
