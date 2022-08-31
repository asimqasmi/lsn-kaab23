import Link from "next/link";

const NavLinks = ({ navbarState: navbar, toggleNav: setNavbar }: any) => {
  return (
    <ul className="flex flex-col justify-between md:flex-row">
      <li className="text-white">
        <Link href="/periods">
          <button onClick={() => setNavbar(!navbar)}>Periods1</button>
        </Link>
      </li>
      <li className="text-white">
        <Link href="/blogs">
          <button onClick={() => setNavbar(!navbar)}>Periods2</button>
        </Link>
      </li>
      <li className="text-white">
        <Link href="/about">
          <button onClick={() => setNavbar(!navbar)}>Periods3</button>
        </Link>
      </li>
      <li className="text-white">
        <Link href="/samples">
          <button onClick={() => setNavbar(!navbar)}>samples</button>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
