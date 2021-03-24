import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navigation from './Layout/Navigation/Navigation';
import Landing from './Pages/Landing';
import Events from './Pages/Events';
import Event from './Pages/Event';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import AdminLogin from './Pages/AdminLogin';
import Admin from './Pages/Admin';
import Contact from './Pages/Contact';
import Berlin from "./Pages/Berlin";
import Glasgow from "./Pages/Glasgow";
import Barcelona from "./Pages/Barcelona";
import Footer from './Layout/Footer/Footer';
import BookEvent from "./Pages/BookEvent";
import Gdpr from "./Pages/Gdpr";
import Presenters from "./Pages/Presenters";

const App = () => {

  return (
    // Page Routing
    <Router>
      <div className="App">
        <Navigation />
      </div>
      {/* Paths */}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/events" exact component={Events} />
        <Route path="/event/:_id" exact component={Event} />
        <Route path="/presenters" exact component={Presenters} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/post" exact component={NewEvent} />
        <Route path="/edit/:_id" exact component={EditEvent} />
        <Route path="/book/:_id" exact component={BookEvent} />
        <Route path="/adminLogin" exact component={AdminLogin} />
        <Route path="/hospitality/berlin" exact component={Berlin} />
        <Route path="/hospitality/glasgow" exact component={Glasgow} />
        <Route path="/hospitality/barcelona" exact component={Barcelona} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/gdpr" exact component={Gdpr} />
        <Redirect to="/" />
      </Switch>
      {/* Paths */}
      <div className="App">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
