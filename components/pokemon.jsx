import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Pokemon({ poke }) {
  const [isselected, setSelected] = useState(false);
  const pokeSelected = () => {
    setSelected(true);
  };

  // console.log(poke.Image);
  return (
    <>
      <Link href={`/pokemon/${poke.name}`}>
        <a
          className="bg-gray-200  h-[12rem] rounded-lg shadow-lg p-3 h-[5rem] hover:-m-2 hover:py-2  hover:cursor-pointer hover:bg-gray-300 grid grid-cols-2 "
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
              {/* <span
              className={`${poke.types[0].type.name} py-[1px] px-2 rounded text-white`}
            >
              {poke.types[0].type.name}
            </span> */}
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
            <picture>
              <source srcSet={poke.imagen} type="image/webp" />
              <img
                src={poke.imagen}
                alt={poke.imagen}
                className={
                  isselected
                    ? "lg:w-25 md:w-[8rem] -mt-8 sm:w-[15rem] ml-[15%] animate-bounce"
                    : "lg:w-25 md:w-[8rem] -mt-8 sm:w-[15rem] ml-[15%] "
                }
              />
            </picture>
            {/* <Image
            src={photoID}
            loader={poke.imagen}
            alt={poke.imagen}
            width={20}
            height={20}
            className={
              isselected
                ? "lg:w-25 md:w-[8rem] -mt-8 animate-bounce"
                : "lg:w-25 md:w-[8rem] -mt-8 "
            }
          /> */}
          </div>
          {/* <div className="bg-red-200"> */}
          {/* </div> */}
        </a>
      </Link>
    </>
  );
}
