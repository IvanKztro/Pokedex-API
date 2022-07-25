import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner";
import IconPoke from "../../components/poke-details/icon";
import Abilities from "../../components/poke-details/abilities";
import Moves from "../../components/poke-details/moves";
import Stats from "../../components/poke-details/stats";

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [poke, setPoke] = useState(null);
  useEffect(() => {
    const getPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const json = await res.json();
      setPoke(json);
    };
    getPokemon();
  }, []);

  return (
    <>
      <div className="mt-[8%] mb-[2rem] details-poke">
        {poke ? (
          <>
            <section className="flex flex-col justify-center  items-center ">
              <IconPoke poke={poke} />
              <div className="  lg:w-[35%] sm:w-[60%]  ">
                <section
                  className={`${poke.types[0].type.name}-border bg-gray-200 text-white  border-2  grid grid-cols pt-[5rem] rounded-lg shadow-lg pb-4 px-5`}
                >
                  <Abilities poke={poke} />

                  <Moves poke={poke} />

                  <Stats poke={poke} />
                </section>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="flex justify-center items-center h-[85vh]">
              <Spinner />
            </section>
          </>
        )}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const router = useRouter();
//   console.log(router.query);
//   // const url
// }

export default PokemonPage;
