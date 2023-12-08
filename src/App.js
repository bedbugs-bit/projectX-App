import React from "react";
import backgroundImage from "./images/olivier-miche-iIg4F2IWbTM-unsplash.jpg";

function App() {
  const appStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "1em",
  };

  const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    listStyle: "none",
    padding: "1em",
    backgroundColor: "#333",
    color: "white",
  };

  const h1Styles = {
    fontSize: "4em",
    color: "#333",
  };
  const h2Styles = {
    fontSize: "2em",
    color: "white",
  };

  const pStyles = {
    fontSize: "1.2em",
    color: "#777",
  };

  const divStyles = {
    padding: "5em",
    paddingTop: "5em",
    paddingLeft: "20em",
    paddingRight: "20em",
  };
  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "1em",
    backgroundColor: "grey",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const linkStyles = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div className="App" style={appStyles}>
      <nav style={navStyles}>
        <a href="#home" style={linkStyles}>
          Home
        </a>
        <a href="#about" style={linkStyles}>
          About
        </a>
        <a href="#contact" style={linkStyles}>
          Contact
        </a>
        <a href="#service" style={linkStyles}>
          Service
        </a>
        <a href="#header" style={linkStyles}>
          Header
        </a>
      </nav>

      <div style={divStyles}>
        <h1 style={h1Styles}>Project X: A Simple, User-Friendly Platform</h1>
        <p style={pStyles}>
          This application has been developed in response to tackling the final
          exam question for the App4080 course. The application is a simple and
          a user-friendly platform. The application is built using ReactJS,
          NodeJS.
        </p>
        <button style={buttonStyles}>Hello World</button>
      </div>

      <div id="about" style={{ padding: "10em", paddingTop: "3rem" }}>
        <h2 style={h2Styles}>About</h2>
        <p style={pStyles}>
          Welcome to our platform! We're thrilled to introduce you to our application, a product of dedication and creativity developed in response to the final exam question for the App4080 course. Our mission is to provide a simple and user-friendly platform that caters to your needs seamlessly.
        </p>
      </div>
    </div>
  );
}

export default App;
