import { useState } from "react";
import Link from "next/link";

export default function InputSearch({ allpokemons }) {
  const [search, setSearch] = useState("");
  const [pokefilter, setPokefilter] = useState([]);
  //   const [search, InputPokemon] = usePokemon();
  const searchingPokemon = () => {
    const pokef = allpokemons.filter((poke) =>
      poke.name.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(pokef);
    // console.log(pokef.slice(0, 5));
    setPokefilter(pokef.slice(0, 5));
  };
  return (
    <>
      <section className="flex justify-center  px-3 py-3 w-full ">
        <form className="w-full max-w-sm flex flex-col">
          <section className="flex flex-col items-center border-red-600 border-b w-full">
            {/* {search} */}
            <input
              type="text"
              value={search}
              placeholder="Charizard"
              className="appearance-none w-full bg-transparent border-none leading-tight focus:outline-none  mt-2 p-2"
              onChange={(e) => {
                // handleSearchPokemon();
                setSearch(e.target.value);
                searchingPokemon();
              }}
            />
          </section>
          <section className="bg-gray-300 z-10 absolute position-data rounded-lg input-results">
            {/* <section className="bg-gray-300 rounded-lg"> */}
            {pokefilter.length > 0 && search ? (
              <>
                {pokefilter.map((p, index) => (
                  //   <ul
                  //     className="hover:cursor-pointer bg-red-200 hover:bg-green-200 "
                  //     key={index}
                  //   >
                  <Link href={`/pokemon/${p.name}`} key={`pokefil-${index}`}>
                    <a className="hover:cursor-pointer hover:bg-green-400 hover:text-white hover:-m-2 hover:py-2 rounded-lg  grid grid-cols-6 items-center">
                      <picture>
                        <source srcSet={p.imagen} type="image/webp" />
                        <img
                          src={p.imagen}
                          alt={p.name}
                          className="col-span-2 w-[4rem] h-[4rem]"
                        />
                      </picture>
                      <div className=" col-span-4 mb-2">{p.name}</div>
                    </a>
                  </Link>
                  //   </ul>
                ))}
              </>
            ) : (
              <></>
            )}
          </section>
        </form>
      </section>
    </>
  );
}
