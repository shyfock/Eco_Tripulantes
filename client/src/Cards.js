import React from 'react';
// import ReactDOM from 'react-dom';
import './Cards.css';

function Cards() {
  return (
    <div className="wrapper">
      <Card
        img='src\assets\dids-2411271.jpg' alt="" 
        title="Lorem"
        description="Texto de prueba 1"
      />

      <Card
        img="src\assets\eberhard-grossgasteiger-4406626.jpg"
        title="Lorem"
        description="Texto de prueba"
      />

      <Card
        img="src\assets\gary-barnes-6231898.jpg"
        title="Lorem"
        description="Texto de prueba 3"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="cards">
      <div className="card__body">
        <img src={props.img} className="card__image" alt="" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Ver Más</button>
    </div>
  );
}

export default Cards;
// ReactDOM.render(<Cards />, document.getElementById("root"));