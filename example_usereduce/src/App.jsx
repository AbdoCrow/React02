import React, { useReducer, useState } from "react";


//Create the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

//The component that uses the hook
function App() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <h2 className="text-3xl font-bold">Count: {count}</h2>

      

      <div className="flex gap-4 mt-4">
        {/*Dispatch actions on button clicks */}
        
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="p-2 bg-blue-500 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="p-2 bg-blue-500 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="p-2 bg-red-500 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;



{/* <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className="border p-2 mt-4"
      /> */}

      {/* <button
        onClick={() => dispatch({ type: "INCREMENT", payload: inputValue })}
        className="p-2 bg-blue-500 rounded"
      >
        Increment by {inputValue}
      </button> */}