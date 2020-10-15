import React, { useContext, useState } from "react";

import { ExampleContext } from "../hooks/context";

const Second = () => {
  const [state, dispatch] = useContext(ExampleContext);
  const [nameValue, setNameValue] = useState(state.name)

  const increaseCount = () => {
      dispatch({type: "INCREMENT_COUNT", payload: {
          count: 10
      }})
  };
  const handlerName = (e) => {
    setNameValue(e.target.value)
  }

  const setName = () => {
    dispatch({type: "SET_NAME", payload: {
        name: nameValue
    }})
};

  return (
    <div>
      <h1>I'm second page</h1>
      <input type="number" value={state.count || 0} />
      <button onClick={increaseCount}>Increase Count</button>
      <div>
      <input type="text" value={nameValue || ''} onChange={handlerName} />
      <button onClick={setName}>Set name</button>
      </div>

    </div>
  );
};

export default Second;
