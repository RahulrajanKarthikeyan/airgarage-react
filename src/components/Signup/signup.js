import React from 'react'
import { Button, Checkbox, Dropdown, Form } from 'semantic-ui-react'
import { options } from './options'
import "./signup.css"

const signup = () => (
            <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Date of Birth (MM/DD/YYYY)</label>
                    <input placeholder="Date of Birth" required pattern = "[0-9]{2}/[0-9]{2}/[0-9]{4}"/>
                  </Form.Field>
                  <Form.Field>
                    <label>Phone Number (XXXXXXXXXX)</label>
                    <input placeholder="Date of Birth" maxLength = "10"/>
                  </Form.Field>
                  <Form.Field>
                    <label>I am here looking for:</label>
                    <Dropdown placeholder='Select Parking Type' fluid selection options={options} />
                  </Form.Field>
                  <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button basic color="orange">Submit</Button>
              </Form>
        )

export default signup;
