export default function Stats({ poke }) {
  return (
    <>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 mt-3 py-3 bg-gray-300 rounded-lg shadow-lg">
        {poke.stats.map((s, index) => (
          <div
            className=" flex flex-col justify-center items-center"
            key={`stat-${index}`}
          >
            {/* <div className=""> */}
            <div
              className={`${poke.types[0].type.name}-text text-lg font-bold text-center`}
            >
              {s.stat.name}
            </div>
            <div className="justify-self-center">
              <button
                key={`abi-${index}`}
                className={`${poke.types[0].type.name} p-1 rounded-[100%] text-[1rem] ml-2 p-[.7rem] `}
              >
                {s.base_stat}
              </button>
            </div>
            {/* </div>
            <div className="w-auto"> */}
            {/* </div> */}
          </div>
        ))}
      </ul>
    </>
  );
}
