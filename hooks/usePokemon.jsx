import { useState } from "react";

const usePokemon = () => {
  const [state, updateState] = useState("");

  const InputPokemon = () => (
    <>
      <input
        type="text"
        value={state}
        placeholder="Charizard"
        className="appearance-none bg-transparent border-none leading-tight focus:outline-none w-10/12 mt-2 px-4 py-2"
        onChange={(e) => {
          updateState(e.target.value);
          console.log("change: ", state);
        }}
      />
    </>
  );
  return [state, InputPokemon, updateState];
};

export default usePokemon;
