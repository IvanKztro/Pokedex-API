import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [navselected, setNavSelected] = useState(false);

  const routes = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "TimeLine",
      link: "/timeline",
    },
  ];

  return (
    <>
      <nav className="sidebar">
        {routes.map((route, index) => (
          <div
            key={index}
            className={route.link === router.pathname ? "navbarselected" : ""}
          >
            <Link href={route.link}>{route.title}</Link>
          </div>
        ))}
      </nav>
    </>
  );
}
