import React from 'react';

import './card1.styles.css'

export const Card1 = (props) => (

    <div className='card-container'>
        <h3>{props.item.title}</h3>
          <b>Author : {props.item.author}</b>
          <img src={props.item.urlToImage} alt='item'/> 
          <p>
            {props.item.content}
          </p>       
          <a href={props.item.url}>Read More</a>
          
    </div>
)
    
export default Card1;