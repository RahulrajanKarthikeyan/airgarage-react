import React, {Component} from 'react'
import { Button, Checkbox, Dropdown, Form } from 'semantic-ui-react'
import { options } from './options'
import './signup.css';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            dob: '',
            username: '',
            password: '',
            phone: '',
            accountType: ''
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState(state);
    }

    setValue(e, data) {
        this.setState({ accountType: data.value })
    }

    handleSubmit = (e) => {
        const { first_name, last_name, username, password, accountType, dob, phone } = this.state;

        e.preventDefault();
        console.log(this.state);

        axios.post('http://staging.airgara.ge/api/register/', { first_name, last_name, username, password, accountType, dob, phone })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Welcome to AirGarage " + res.data.first_name);
            })

            .catch(error => {
              var errorResponse = "";

              for(var key in error.response.data) {
                  errorResponse += key + ': ' + error.response.data[key] + '\n';
              }
                  console.log(errorResponse);
            });
    }

render() {

    const { first_name, last_name, email, dob, password, accountType, phone } = this.state;
    return (
            <Form onSubmit = { this.handleSubmit } >
                  <Form.Field>
                    <label>First Name</label>
                    <input name="first_name" value = { first_name } onChange = { this.onChange } placeholder='First Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input name="last_name" value = { last_name } onChange = { this.onChange } placeholder='Last Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input name="username" type='Email' value = { email } onChange = { this.onChange } placeholder="Email"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input name="password" value = { password } onChange = { this.onChange } placeholder="Password" minLength="8"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Date of Birth (MM/DD/YYYY)</label>
                    <input name="dob" value = { dob } onChange = { this.onChange } placeholder="Date of Birth" required pattern = "[0-9]{2}/[0-9]{2}/[0-9]{4}"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Phone Number (XXXXXXXXXX)</label>
                    <input name="phone" value = { phone } onChange = { this.onChange } placeholder="Date of Birth" pattern=".{10,}" required title="Please enter 10 digit number"/>
                  </Form.Field>
                  <Form.Field>
                    <label>I am here looking for:</label>
                    <Dropdown name="accountType" value = { accountType } placeholder='Select Parking Type' fluid selection options= { options } onChange = { this.setValue.bind(this) } />
                  </Form.Field>
                  <Form.Field>
                  <Checkbox toggle/> <label>I accept the <a href='https://airgara.ge/terms/'>User Agreement</a> and <a href='https://airgara.ge/privacy/'>Privacy</a> </label>
                  </Form.Field>
                  <Button type="submit" basic color="orange">Submit</Button>
              </Form>
        )
    }
}

export default SignUp;
