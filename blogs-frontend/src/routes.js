import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import Search from './components/Search';
import About from './components/About';
import Write from './components/Write';
import Picture from './components/Picture';

export default function(){
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='blog' component={Blog} />
        <Route path='search' component={Search} />
        <Route path='about' component={About} />
        <Route path='write' component={Write} />
        <Route path='picture' component={Picture} />
      </Route>
    </Router>
  )
}
