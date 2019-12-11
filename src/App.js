import React from 'react';
import Homepage from './homepage/homepage.component'
import New from './new/new.component'

import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h1>Get The Latest News Feeds Here!!</h1>
    <Route exact path='/' component={Homepage} />
    <Route path='/new' component={New} />
    </div>
  );
}
    

export default App;
