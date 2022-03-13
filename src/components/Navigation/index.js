import React from "react";

function Nav(props) {
  const navItems = ["About", "Portfolio", "Resume", "Contact Me"];

  return (
    <nav>
      <ul className="flex-row">
        {navItems.map((navItems) => (
          <li
            className={
              props.currentPage === navItems ? "mx-5 navActive" : "mx-5"
            }
            key={navItems}
          >
            <a
              href={"#" + navItems.toLowerCase()}
              onClick={() => props.handlePageChange(navItems)}
              className={
                props.currentPage === navItems ? "mx-5 navActive" : "mx-5"
              }
            >
              {navItems}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;