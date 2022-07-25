export default function IconPoke({ poke }) {
  return (
    <>
      <div className="w-[50%] flex justify-center  ">
        <div
          className={` rounded-full border-gray-200 border-[.5rem] -m-[5rem] z-50 ${poke.types[0].type.name}`}
        >
          <picture>
            <source srcSet={poke.sprites.front_default} type="image/webp" />
            <img
              src={poke.sprites.front_default}
              alt="Landscape picture"
              className="item-center w-[10rem] relative"
            />
          </picture>
        </div>
      </div>
    </>
  );
}
