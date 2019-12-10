import React from 'react';
import {CardList} from './card-list/card-list';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        articles : []
    }

  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/everything?q=apple&from=2019-12-09&to=2019-12-09&sortBy=popularity&apiKey=a0e99c8c595f41a3959589b28f8279a3')
    .then(response => response.json())
    .then(response => this.setState({
        articles : response.articles
    }))
  
  }
  render(){
    const {articles} = this.state
  return (
    <div className='App'>
       <h1>Get The Latest News Feeds Here!!</h1>
       <CardList articles={articles} />
    </div>

  );
  }
}

export default App;
