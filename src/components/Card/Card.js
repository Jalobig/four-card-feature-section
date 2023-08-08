import React from "react";
import classes from "./Card.module.scss";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <div style={{ backgroundColor: props.color }} className={classes.card__color}></div>
      <div className={classes.card__group}>
        <h3 className={classes.card__title}>{props.title}</h3>
        <p className={classes.card__text}>{props.children}</p>
        <img src={props.img} alt={`Icon for ${props.title}`} />
      </div>
    </div>
  );
};

export default Card;
