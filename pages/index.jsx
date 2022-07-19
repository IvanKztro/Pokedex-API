// import Link from "next/link";
import { useState } from "react";
import Pokemon from "../components/pokemon";
import ButtonsNav from "../components/buttons-nav";
import Spinner from "../components/spinner";
export default function Timeline({ data }) {
  const { pokemons, previous, nextp } = data;
  const [pokes, setPokes] = useState(pokemons);
  const [pre, setPreviuos] = useState(previous);
  const [next, setNext] = useState(nextp);
  const [isloading, setIsloading] = useState(false);

  return (
    <div className="lg:mt-[10%] md:mt-[13%] sm:mt-[15%] mb-[5%]">
      {isloading ? (
        <section className="flex justify-center items-center h-[85vh]">
          <Spinner />
        </section>
      ) : (
        <section className="flex justify-center mt-[20%] sm:mt-[10%] md:mt-[10%] lg:mt-[5%] ">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 md:w-[70%] sm:w-[50%] ">
            {pokes.map((poke, index) => (
              <Pokemon key={index} poke={poke} />
            ))}
          </ul>
        </section>
      )}

      <ButtonsNav
        next={next}
        pre={pre}
        setPokes={setPokes}
        setPreviuos={setPreviuos}
        setNext={setNext}
        setIsloading={setIsloading}
      />
    </div>
  );
}

export async function getStaticProps() {
  const getPokes = (num) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  let arrayPoke = [];
  for (let index = 0; index < 15; index++) {
    let data = await getPokes(index + 1);
    arrayPoke.push(data);
  }

  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30";
  const res = await fetch(url);
  const json = await res.json();
  const { previous, next } = json;

  const pokemons = arrayPoke.map((data, index) => {
    return {
      id: index + 1,
      name: data.name,
      types: data.types,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });

  return {
    props: {
      data: {
        pokemons,
        previous,
        nextp: next,
      },
    },
  };
}
