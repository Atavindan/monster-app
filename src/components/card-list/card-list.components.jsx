import React from 'react';

import './card-list.style.css';


export const CardList = props => (
   <div className='card-list'>
  { props.monster.map(monsters => (
    <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${monsters.id}?set=set2`} />
    <h2 key={monsters.id} >{monsters.name}</h2>
    <p>{monsters.email}</p>
    </div>
    
    ))
    }
  </div>
);