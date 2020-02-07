import React from "react";


 export class Login extends React.Component {
   

    render() {
        return (
            <div className="base-container">
                <div className="content">
                    <div className="image">
                        <div className="header">Login</div>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label hmtlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label hmtlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                </button>
                </div>
            </div>
        );
    }
}



