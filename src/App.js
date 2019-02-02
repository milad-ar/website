import React, { Component } from "react";
import { Router } from "@reach/router";
import { AboutUsPage, ExamplePage, HomePage } from "./pages";
import "normalize.css";
import "./App.sass";
import "./vars.scss";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactUsPage from "./pages/contact-us";

// The default language
export const LocaleContext = React.createContext("fa");

class App extends Component {
  render() {
    return (
      <LocaleContext.Provider value="fa">
        <div className="App">
          <Router>
            <HomePage path="/" />
            <AboutUsPage path="about-us" />
            <ContactUsPage path="contact-us" />
            <ExamplePage path="example" />
            <ServicesPage path="services" />
            <ProjectsPage path="projects" />
          </Router>
        </div>
      </LocaleContext.Provider>
    );
  }
}

export default App;
