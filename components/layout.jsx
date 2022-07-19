import Sidebar from "./sidebar";
import Navbar from "./nav";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="content">
        <Sidebar className="sidebar" /> */}
      <Navbar className="navbar" />
      <main id="main" className="main">
        {children}
      </main>
      {/* </div> */}
    </>
  );
}
