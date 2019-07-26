import React from 'react';
import './card.css';

const Cards = props => (
    // <div className=" col-sm-2 col-md-2 col-lg-2 ">
    <div className="col-2">
        <div class="portrait square landscape">
        <img className="images" alt={props.name} src={props.image}
        onClick={() => props.handleClick(props.id)} />
        </div>
    </div>

);

export default Cards;
