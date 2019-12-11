import React from 'react';

import Card1 from '../card1/card1.component';

import './card1.styles.css'

 const CardList1 = (props) => {
    
    return ( 
    <div className='card-list1'>
    {         
              props.articles.map((item,idx) =>
        (<Card1 key={idx} item={item} /> )
             )
          }
    </div>
    );
};

export default CardList1;