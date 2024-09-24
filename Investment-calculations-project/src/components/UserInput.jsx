export default function UserInput({ onChange, Input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investmant</label>
          <input
            type="number"
            value={Input.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Anual Investmant</label>
          <input
            type="number"
            value={Input.annualInvestment}
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={Input.expectedReturn}
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={Input.duration}
            required
            onChange={(event) => onChange("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
