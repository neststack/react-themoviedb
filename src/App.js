import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleMovie from './pages/SingleMovie';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/movie/:id'>
          <SingleMovie />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
