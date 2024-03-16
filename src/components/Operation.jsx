import React, { useState } from "react";
import { store } from "../redux/store";
import { deposit, withdraw } from "../redux/accountActions";

const Operation = ({ fetchQuote }) => {
  const [sum, setSum] = useState(1);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
            className="btn btn-primary btn-lg"
            onClick={() => store.dispatch(withdraw(sum))}
        >Withdraw</button>
        <input
          type="number"
          className="form-control-lg text-center"
          min={0}
          value={sum}
          onChange={(e) => setSum(+e.target.value)}
        />
        <button className="btn btn-primary btn-lg"
            onClick={() => store.dispatch(deposit(sum))}
        >Deposit</button>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={fetchQuote} className="btn btn-info btn-lg">
          Get quote
        </button>
      </div>
    </div>
  );
};

export default Operation;
