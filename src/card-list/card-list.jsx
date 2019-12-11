import React from 'react';

import Card from '../card/card.component'

import './card-list.styles.css';
import {Link} from 'react-router-dom';

 const CardList = (props) => {
    
    return ( 
    <div className='card-list'>
    {         
              props.articles.map((item,idx) =>
    <Link to={'/new'}>{<Card key={idx} item={item} /> }</Link>
             )
          }
    </div>
    );
};

export default CardList;