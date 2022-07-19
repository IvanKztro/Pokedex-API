import Link from "next/link";
import Navbar from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useEffect, useState } from "react";
import Pokemon from "../../components/pokemon";
import ButtonsNav from "../../components/buttons-nav";

export default function Timeline({ pokemons, previous, nextp }) {
  const [pokes, setPokes] = useState(pokemons);
  const [pre, setPreviuos] = useState(previous);
  const [next, setNext] = useState(nextp);

  // useEffect(() => {

  return (
    <>
      <h1>Timeline</h1>
      <section className="flex justify-center">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 w-[70%]">
          {pokes.map((poke, index) => (
            <Pokemon key={index} poke={poke} />
          ))}
        </ul>
      </section>

      <ButtonsNav
        next={next}
        pre={pre}
        setPokes={setPokes}
        setPreviuos={setPreviuos}
        setNext={setNext}
      />
      {/* </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30";
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  const { previous, next, results } = json;
  const pokemons = results.map((data, index) => {
    return {
      name: data.name,
      id: index + 1,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });

  return {
    props: {
      pokemons,
      previous,
      nextp: next,
      // previous: previous ? previous : null,
      // next: next ? next : null,
    },
  };
}
