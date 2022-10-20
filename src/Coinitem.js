import React from 'react';
import './Coins.css';

const Coinitem = (props) => {
  return (
    <div className='coin-row'>
           <p>{props.coins.market_cap_rank}</p>
   <div className='img-symbol' >
    <img src={props.coins.image}  alt=""/>
    <p>{props.coins.symbol.toUpperCase()}</p>
   </div>
   <p>${props.coins.current_price.toLocaleString()}</p>
   <p>{props.coins.price_change_percentage_24h.toFixed()}%</p>
   <p className='hide-mobile' >${props.coins.current_price.toLocaleString()}</p>
   <p  className='hide-mobile'>${props.coins.current_price.toLocaleString()}</p>
    </div>
  )
}

export default Coinitem;