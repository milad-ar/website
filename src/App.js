import React, { Component } from "react";
import { Router } from "@reach/router";

import {
  AboutUsPage,
  ContactUsPage,
  HomePage,
  ProjectsPage,
  ServicesPage
} from "./pages/";

import "./styles/App.sass";

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
            <ServicesPage path="services" />
            <ProjectsPage path="projects" />
          </Router>
        </div>
      </LocaleContext.Provider>
    );
  }
}

export default App;
