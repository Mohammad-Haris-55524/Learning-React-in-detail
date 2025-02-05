import React from "react";
import { Link, Outlet } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-indigo-200">
      <div className="text-2xl font-serif font-extrabold text-green-700 underline">
        {" "}
        My Store
      </div>
      <nav>
        <ul className="flex gap-x-12">
          <li className="text-lg font-serif text-blue-700 hover:text-blue-900">
            <Link to={"/"}>Products</Link>
          </li>

          <li className="text-lg font-serif text-blue-700 hover:text-blue-900">
            <Link to={"/cart"}>Cart</Link>
          </li>

          <li className="text-lg font-serif text-blue-700 hover:text-blue-900">
            <Link to={"/about-us"}>About Us</Link>
          </li>

          <li className="text-lg font-serif text-blue-700 hover:text-blue-900">
            <Link to={"/sign-in"}>Sign in</Link>
          </li>

          <li className="text-lg font-serif text-blue-700 hover:text-blue-900">
            <Link to={"/sign-up"}>Sign up</Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
