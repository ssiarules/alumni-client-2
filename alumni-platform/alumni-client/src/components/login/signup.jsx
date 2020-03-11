import React from "react";
import axios from "axios";


export class Signup extends React.Component {
   
   constructor(props) {
       super(props);

       this.state = {
           email: "",
           password: "", 
           password_confirmation: "",
           registrationErrors: ""
       }

       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }



   handleChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       });
   }

   handleSubmit(event) {
        const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
          }
        },
        { withCredentials: false }// tells the API its ok to set that cookie in the client with
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        } 
       console.log("registration res", response); 
      })
      .catch(error => {
        console.log("registration error", error);
      });

       console.log("form submitted")
       event.preventDefault();
   }

    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
            <h1> Signup Today!  </h1>
            
        <div className="form-group">
        <label className="control-label"> Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
    
        <div className="form-group">
         <label className="control-label"> Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg" type="submit">Signup</button>
         </div>
        </form>
      </div>
   
        );
    }
}


            
                        
                        