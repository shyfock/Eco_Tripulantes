import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
// import ReactDOM from 'react-dom';
import './Cards.css';

class InfoCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <Card style={{
        width: '18rem',
        height: '40rem'
       }}>
        <Card.Img variant="top" src={this.props.image} alt="Sin imagen" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{overflow: "scroll", height: "15rem"}}>
            {this.props.description}
          </Card.Text>
          <Card.Footer>
            {this.props.author}
          </Card.Footer>
          <Card.Footer style={{fontSize: "70%"}}>
            Publicado: {this.props.date}
          </Card.Footer>
          <Button variant="primary" href={this.props.url} target="_blank">Ver más</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default InfoCard;

// function Cards() {
//   return (
//     <div className="wrapper">
//       <Card
//         img='src\assets\dids-2411271.jpg' alt="" 
//         title="Lorem"
//         description="Texto de prueba 1"
//       />

//       <Card
//         img="src\assets\eberhard-grossgasteiger-4406626.jpg"
//         title="Lorem"
//         description="Texto de prueba"
//       />

//       <Card
//         img="src\assets\gary-barnes-6231898.jpg"
//         title="Lorem"
//         description="Texto de prueba 3"
//       />
//     </div>
//   );
// }

// function Card(props) {
//   return (
//     <div className="cards">
//       <div className="card__body">
//         <img src={props.img} className="card__image" alt="" />
//         <h2 className="card__title">{props.title}</h2>
//         <p className="card__description">{props.description}</p>
//       </div>
//       <button className="card__btn">Ver Más</button>
//     </div>
//   );
// }

// export default Cards;
// ReactDOM.render(<Cards />, document.getElementById("root"));