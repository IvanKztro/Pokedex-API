export default function Moves({ poke }) {
  return (
    <>
      <ul className="flex gap-2 items-center mt-3">
        <div className="w-2/12">
          <span className={`${poke.types[0].type.name}-text text-lg font-bold`}>
            Moves:
          </span>
        </div>
        <div className="flex flex-wrap gap-3 w-auto">
          {poke.moves.slice(0, 4).map((a, index) => (
            <button
              key={`moves-${index}`}
              className={`${poke.types[0].type.name}  p-1 rounded-md text-[14px]`}
            >
              {a.move.name}
            </button>
          ))}
        </div>
      </ul>
    </>
  );
}
