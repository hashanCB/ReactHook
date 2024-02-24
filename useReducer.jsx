"use client";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.data };
    case "address":
      return { ...state, address: action.data };
    case "age":
      return { ...state, age: action.data };
    case "submit":
      return { ...state, submit: [...state.submit, action.data] };
    default:
      return state;
  }
};

const initialize = {
  name: "hashan",
  address: "Polgahawela",
  age: 25,
  submit: [],
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialize);
  console.log(state);
  return (
    <div>
      <form className=" flex flex-col text-black max-w-[200px]">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className=" border border-red-500"
            onChange={(e) => dispatch({ type: "name", data: e.target.value })}
          />
        </label>

        <label htmlFor="address">
          <input
            type="text"
            name="address"
            placeholder="enter your address"
            className=" border border-red-500"
            onChange={(e) =>
              dispatch({ type: "address", data: e.target.value })
            }
          />
        </label>

        <label htmlFor="age">
          <input
            type="text"
            name="age"
            placeholder="enter your age"
            className=" border border-red-500"
            onChange={(e) => dispatch({ type: "age", data: e.target.value })}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            dispatch({
              type: "submit",
              data: {
                name: state.name,
                address: state.address,
                age: state.age,
              },
            });
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UseReducer;
