import React, { useState } from "react";

const FunctionState = () => {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <p>Counter Function State : {counter}</p>
      <button onClick={() => setcounter((prevcounter) => prevcounter + 1)}>
        State dans Function
      </button>
    </div>
  );
};

export default FunctionState;
