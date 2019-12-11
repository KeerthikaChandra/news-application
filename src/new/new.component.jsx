import React from 'react';
import CardList1 from '../cardlist1/card-list1.component'

class New extends React.Component  {
    constructor(){
        super()

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
        return(
            <div>
            <CardList1 articles={this.state.articles} />
        </div>
        )
    }
    
}

export default New;