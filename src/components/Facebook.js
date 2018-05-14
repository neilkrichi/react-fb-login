import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    }
  }

  responseFacebook = response => {
    console.log(response);
  }

  componentClicked = () => console.log("clicked")

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null
    }
    else {
      fbContent = (<FacebookLogin
    appId="1782963195059898"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />)
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
