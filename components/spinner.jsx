export default function Spinner() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="pokemon"></div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          className="w-[10rem]"
        />
      </div>
    </>
  );
}
