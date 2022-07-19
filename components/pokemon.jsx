import { useState } from "react";
export default function Pokemon({ poke }) {
  const [isselected, setSelected] = useState(false);
  const pokeSelected = () => {
    setSelected(true);
  };
  return (
    <>
      <div
        className="bg-gray-200  h-[12rem] rounded-lg shadow-lg p-3 h-[5rem]  hover:cursor-pointer hover:bg-gray-300 grid grid-cols-2 "
        onClick={() => {
          pokeSelected();
        }}
        onFocus={pokeSelected}
        onMouseEnter={() => {
          setSelected(true);
        }}
        onMouseLeave={() => {
          setSelected(false);
        }}
      >
        <div>
          <h4 className="font-bold lg:text-[1.2rem] md:text-[1rem] sm:text-[0.9rem]">
            {poke.name}
          </h4>
          <ul className="flex gap-2 mt-3">
            {poke.types.map((data, index) => (
              <span
                className={`${data.type.name} py-[1px] px-2 rounded text-white`}
                key={`type-${index}`}
              >
                {data.type.name}
              </span>
            ))}
          </ul>{" "}
        </div>
        <div className="">
          <img
            src={poke.imagen}
            alt={poke.imagen}
            className={
              isselected
                ? "lg:w-25 md:w-[8rem] -mt-8 animate-bounce"
                : "lg:w-25 md:w-[8rem] -mt-8 "
            }
          />
        </div>
        {/* <div className="bg-red-200"> */}
        {/* </div> */}
      </div>
    </>
  );
}
