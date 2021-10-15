import React from "react";
import "./Coin.css";

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) =>
  // props
  {
    return (
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="cryptocurrancy" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange}%</p>
            ) : (
              <p className="coin-percent green">{priceChange}%</p>
            )}
            <p className="coin-marketcap">Mkt Cap: ${marketcap}</p>
          </div>
        </div>
      </div>

      /* If we use props, then we have to write the code as follows:

    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
            <img src={props.coin.image} alt="cryptocurrancy"/> 
            <h1>{props.coin.name}</h1>
            <p className="coin-symbol">{props.coin.symbol}</p>
        </div>
        <div className="coin-data">
        <p className="coin-price">${props.coin.current_price}</p>
        <p className="coin-volume">${props.coin.total_volume}</p>
        {props.coin.price_change_percentage_24h < 0 ? (
            <p className='coin-percent red'>{
              props.coin.price_change_percentage_24h}%</p>
          ) : (
            <p className='coin-percent green'>{
              props.coin.price_change_percentage_24h}%</p>
          )}
           <p className='coin-marketcap'>
            Mkt Cap: ${props.coin.market_cap}
          </p>
        </div>
        
      </div>
    </div>  */
    );
  };

export default Coin;
