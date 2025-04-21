import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCrown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <header>
        <div className="simbolo_div">
          <h1>
            Dev King{" "}
            <FontAwesomeIcon
              icon={faCrown}
              style={{ color: "white", fontSize: "25px" }}
            />
          </h1>
        </div>

        <div className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            style={{ color: "white", fontSize: "25px" }}
          />
        </div>

        <nav className={menuOpen ? "active" : ""}>

          <a href="#">home</a>
          <a href="#">contact</a>
          <a href="#">about</a>
        </nav>
      </header>

      <main>
        <div className="container_01">
          <div className="container_intro">
            <h1>
              {" "}
              <span className="span">Eric Gonçalves </span>| Desenvolvedor web
            </h1>
          </div>
          <div className="container_intro">
            <p>
              {" "}
              Olá mundo! eu sou<span className="span"> Eric Gonçalves. </span>
            </p>{" "}
            <br />
            <p>
              desenvolvedor web profissional e esse é meu primeiro site em
              React!
            </p>
          </div>
          <div className="container_intro">
            <button className="start">
              {" "}
              <i className="fas fa-caret-down" style={{ fontSize: "50px" }}></i>
            </button>
          </div>
        </div>
      </main>
      <section className="contact_express">
        <div className="contact_intro">
          <h1>
            <span style={{ fontWeight: "200" }}>
              Eu sou um desenvolvedor web que sempre{" "}
            </span>{" "}
            busco encontrar soluções inovadoras!
          </h1>{" "}
          <br />
          <h1 style={{ fontSize: "19px", fontWeight: "400" }}>
            Entre em contato comigo para criarmos um projeto inovador!
          </h1>
        </div>
        <div className="contact_content">

          
         
              
           
         
        </div>
      </section>
    </>
  );
}

export default Home;
