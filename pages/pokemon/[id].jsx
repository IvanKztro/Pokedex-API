import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner";

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
      <div className="mt-[8%] mb-[2rem]">
        {poke ? (
          <>
            <section className="flex flex-col justify-center  items-center ">
              <div className="w-[50%] flex justify-center  ">
                <div
                  className={` rounded-full border-gray-200 border-[.5rem] -m-[5rem] z-50 ${poke.types[0].type.name}`}
                >
                  <picture>
                    <source
                      srcSet={poke.sprites.front_shiny}
                      type="image/webp"
                    />
                    <img
                      src={poke.sprites.front_shiny}
                      alt="Landscape picture"
                      className="item-center w-[10rem] relative"
                    />
                  </picture>
                </div>
              </div>
              <div className="  lg:w-[40%] sm:w-[60%]  ">
                <section
                  class={`${poke.types[0].type.name}-border bg-gray-200 text-white  border-2  grid grid-cols pt-[5rem] rounded-lg shadow-lg pb-4 px-12`}
                >
                  {/* <div class="bg-yellow-200 "> */}
                  <ul class="flex gap-2 items-center mt-3">
                    <span
                      className={`${poke.types[0].type.name}-text text-lg font-bold`}
                    >
                      Abilities:
                    </span>
                    {poke.abilities.map((a, index) => (
                      <button
                        key={`abi-${index}`}
                        className={` ${poke.types[0].type.name} bg-gray-300 p-1 rounded-md text-[14px]`}
                      >
                        {a.ability.name}
                      </button>
                    ))}
                  </ul>

                  <ul class="flex gap-2 items-center mt-3">
                    <span
                      className={`${poke.types[0].type.name}-text text-lg font-bold`}
                    >
                      Moves:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {poke.moves.slice(0, 4).map((a, index) => (
                        <button
                          key={`abi-${index}`}
                          className={`${poke.types[0].type.name}  p-1 rounded-md text-[14px]`}
                        >
                          {a.move.name}
                        </button>
                      ))}
                    </div>
                  </ul>

                  <ul class="flex gap-3 flex-wrap flex-col mt-3">
                    {poke.stats.map((s, index) => (
                      <div class="">
                        <span
                          className={`${poke.types[0].type.name}-text text-lg font-bold`}
                        >
                          {s.stat.name}:
                        </span>
                        <button
                          key={`abi-${index}`}
                          className={`${poke.types[0].type.name} p-1 rounded-md text-[1rem] ml-2`}
                        >
                          {s.base_stat}
                        </button>
                      </div>
                    ))}
                  </ul>
                  {/* </div> */}
                  {/* <div class="bg-purple-400 col-span-6 "></div> */}
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
