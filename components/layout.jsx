import Navbar from "./nav";

export default function Layout({ children }) {
  return (
    <>
      <Navbar className="navbar" />
      <main id="main" className="main">
        {children}
      </main>
      {/* </div> */}
    </>
  );
}
