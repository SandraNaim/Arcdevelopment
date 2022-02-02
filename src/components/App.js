import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from  "./ui/Theme.js";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage.js";
import Services from "./Services.js";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps.js";
import Websites from "./Websites.js";
import Revolution from "./Revolution.js";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(props) => 
              <LandingPage 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex} 
              />
            } 
          />
          <Route 
            exact 
            path="/services" 
            render={(props) => 
              <Services 
                {...props} 
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}
              />
            } 
          />
          <Route 
            exact 
            path="/customsoftware" 
            render={(props) => 
              <CustomSoftware 
                {...props}
                setSelectedIndex={setSelectedIndex}
              />
            } 
          />
          <Route 
            exact 
            path="/mobileapps" 
            render={(props) => 
              <MobileApps 
                {...props}
                setSelectedIndex={setSelectedIndex}
              />
            } 
          />
          <Route 
            exact 
            path="/websites" 
            render={(props) => 
              <Websites 
              setSelectedIndex={setSelectedIndex}
              />
            } 
          />
          <Route 
            exact 
            path="/revolution" 
            render={(props) => 
            <Revolution />} 
          />
          <Route exact path="/about" component={() => <div>about us</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
