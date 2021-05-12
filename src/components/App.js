import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Reviews from './pages/reviews';
import OurDogs from './pages/dogs/ourDogs';
import Males from './pages/dogs/males';
import Females from './pages/dogs/females';
import Availability from './pages/availability';
import Contact from './pages/contact';
import FAQ from './pages/faq';

import Navigation from './navigation';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <Router>
          <div>
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={About} />
              <Route path="/customer-reviews" component={Reviews} />

              <Route path="/our-dogs" component={OurDogs} />
              <Route path="/our-dogs/males" component={Males} />
              <Route path="/our-dogs/females" component={Females} />

              <Route path="/availability" component={Availability} />
              <Route path="/contact-us" component={Contact} />

              <Route path="/faq" component={FAQ} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
