import React, { useState } from 'react';
import Nav from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Project from "../Project";
import Resume from "../Resume";
import hero from '../../assets/backgrounds/Orange.png'

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Project />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="nav-main">
                <div className="nav-items">
                    <a
                        href="#about"
                    >
                        <span >Maggie Finnegan</span>
                    </a>
                </div>
                <Nav
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </nav>

            <img src={hero} className="my-2" style={{ width: "100%" }} alt="hero" />

            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;