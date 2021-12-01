import React, { Component } from "react";
import "./userProfile.css";
import image from '../../assets/user.jpg';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={image} alt="#"/>
          </div>
          <h4>{this.props.username}</h4>
          <p>frontend Developer</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
