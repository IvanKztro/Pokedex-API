export default function ButtonsNav({
  next,
  pre,
  setNext,
  setPreviuos,
  setPokes,
  setIsloading,
}) {
  const getPokes = (num) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  const getAPI = async (url) => {
    setIsloading(true);
    const res = await fetch(url);
    const json = await res.json();
    const { previous, next, results } = json;
    const arr = url.split("offset=", -1);
    const count = parseInt(arr[1].split("&")[0]);

    let arrayPoke = [];
    for (let index = 0; index < 18; index++) {
      const counttotal = count + index + 1;
      let data = await getPokes(counttotal);
      arrayPoke.push(data);
    }

    const pokemonsArray = arrayPoke.map((data, index) => {
      return {
        id: index + 1,
        name: data.name,
        types: data.types,
        imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          count + index + 1
        }.png`,
      };
    });
    setPokes(pokemonsArray);
    setPreviuos(previous);
    setNext(next);
    setIsloading(false);
  };

  const getPrevious = () => {
    if (pre) getAPI(pre);
  };

  const getNext = () => {
    if (next) getAPI(next);
  };

  return (
    <>
      <section className="fixed w-full z-10 bottom-[40%] ">
        <div className="py-3 flex justify-between px-5">
          <button
            className="bg-red-500 text-white hover:bg-red-600  p-2 rounded-lg "
            onClick={() => {
              getPrevious();
            }}
          >
            <img
              src="./right.png"
              alt=""
              className="h-4 w-3 rotate-180 invert"
            />
          </button>
          <button
            className="bg-red-500 text-white hover:bg-red-600  p-2 rounded-lg "
            onClick={() => {
              getNext();
            }}
          >
            <img src="./right.png" alt="" className="h-4 w-3 invert " />
          </button>
        </div>
      </section>
    </>
  );
}
