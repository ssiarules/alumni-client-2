import React, { Component } from 'react'
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {
    state = {
        isLoggedIn: false, 
        userID: '',
        name: '',
        picture: ''
    }

    componentClicked = () => {
        console.log("Facebook btn clicked");
    }

    responseFacebook = (response, e) => {
        console.log(response);
        //when you console response in your console you will follow down to locate the data you want to render on the page to the user
       
            this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            picture: response.picture.data.url
        });
    }

    render(){
        let facebookData;

        if(this.state.isLoggedIn){

            facebookData = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome {this.state.name} </h2>
                </div>
            )
        } else {
            facebookData = (
                 <FacebookLoginBtn
                    appId="688081575269008"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    />
            );

        }

        //state.auth if user not login it it will be false if login in auth will be true
        //if user not logged in it will show facebook button & say "Login with Facebook"
        // if logged in it will output facebookData from Facebook object
      
        // Once the user is logged we will render the data to the user 
            
            
        return(
            <>
            {facebookData}
           </>
        );
    }
}