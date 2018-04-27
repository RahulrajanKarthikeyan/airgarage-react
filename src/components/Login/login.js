import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import "./login.css"
import axios from 'axios';

class login extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) 
    {
        event.preventDefault();

        const user = 
        {
            username: this.state.email,
            password: this.state.password
        };

        axios.post('http://staging.airgara.ge/api/auth/', user).then(response => 
        {
            //alert("Login Successful!");
        })

        .catch(error => 
        {
            //alert("Account Not Found");
        });
    }
       
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
            <Header as='h3'>
                Log in
            </Header>
                  
                  <Form.Field>
                    <input placeholder="Email"value={this.state.email}/>
                  </Form.Field>

                  <Form.Field>
                    <input placeholder="Password" value={this.state.password}/>
                  </Form.Field>
                  
                  <Button>
                    LOG IN 
                  </Button>
              </Form>
        );

    }
}
export default login;