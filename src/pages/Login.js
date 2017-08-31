import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';
import {
  withRouter
} from 'react-router-dom';

const FieldGroup = function ({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} /> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const malls = [
  {
    "id": 1,
    "name": "Mall Jakarta",
  },
  {
    "id": 2,
    "name": "Mall Surabaya",
  },
  {
    "id": 3,
    "name": "Mall Malang",
  },
]

class Login extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text" />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            placeholder="Enter password" />

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              {
                malls.map(mall => (
                  <option key={mall.id} value={mall.name}>{mall.name}</option>
                ))
              }
            </FormControl>
          </FormGroup>
          <Button className="btn btn-primary btn-large centerButton" onClick={this.props.onLogin} type="button">
            Submit
        </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default withRouter(Login);