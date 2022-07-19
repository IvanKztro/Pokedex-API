export default function Spinner() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="pokemon"></div>
        <picture>
          <source
            srcSet="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            type="image/webp"
          />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Landscape picture"
            className="w-[10rem]"
          />
        </picture>
      </div>
    </>
  );
}
