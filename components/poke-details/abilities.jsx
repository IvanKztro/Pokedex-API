export default function Abilities({ poke }) {
  return (
    <ul className="flex gap-4 items-center mt-3 ">
      <div className="w-2/12">
        <span className={`${poke.types[0].type.name}-text text-lg font-bold`}>
          Abilities:
        </span>
      </div>
      <div className="w-auto flex gap-3">
        {poke.abilities.map((a, index) => (
          <button
            key={`abi-${index}`}
            className={` ${poke.types[0].type.name} bg-gray-300 p-1 rounded-md text-[14px]`}
          >
            {a.ability.name}
          </button>
        ))}
      </div>
    </ul>
  );
}
