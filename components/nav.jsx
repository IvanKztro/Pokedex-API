export default function Navbar() {
  return (
    <>
      <nav className="bg-red-600 px-3 py-3 text-white fixed w-full z-10 top-0">
        <h2 className="font-bold text-[2rem]">Pokedex</h2>
      </nav>
      <slot name="sidebar" />
    </>
  );
}
