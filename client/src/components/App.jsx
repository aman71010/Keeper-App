import React from "react";
import HeaderNav from "./navbar/Navbar";
import AddNote from "./addNote/AddNote";
import AllNotes from "./allNotes/AllNotes";
import EditNote from "./editNote/EditNote";
import Footer from "./Footer";
import About from "./about/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={AddNote} />
        <Route exact path="/add" component={AddNote} />
        <Route exact path="/all" component={AllNotes} />
        <Route exact path="/edit/:id" component={EditNote} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
