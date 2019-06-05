import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, Button } from 'react-md';
import MDSpinner from 'react-md-spinner';
import './Contact.css';

import * as actions from '../../state/Contact/action';

class Contact extends Component {
  onBlur = ({ target: { value }}, key) => {
    this.props.updateFieldContact(key, value)
  }

  onClick = () => {
    this.props.saveContact();
  }

  render() {
    const errors = {};
    let diabledButton = true;
    const { loading, fields } = this.props;
    return (
      loading
        ? <MDSpinner />
        : (
          <div className="center-div">
            <div>
              {
                Object.keys(fields).map((key) => {
                  const {
                    placeholder,
                    type = 'text',
                    value = '',
                    maxLenth,
                    touched,
                    errorMessage,
                  } = fields[key];
                  errors[key] = touched && !value ? errorMessage : 
                  (touched && value.length > maxLenth ? `The max value of characters is ${maxLenth}` : '');
                  diabledButton = diabledButton && !errors[key] && touched;
                  console.log(diabledButton, errors, touched)
                  return (
                    <TextField
                      id={key}
                      onBlur={event => this.onBlur(event, key)}
                      key={key}
                      error={!!errors[key]}
                      errorText={errors[key]}
                      placeholder={placeholder}
                      type={type}
                    />
                  );
                })
              }
              <Button disabled={!diabledButton} raised onClick={this.onClick}>Hello, World!</Button>
            </div>
          </div>
        )
    );
  }
}

const mapStateToProps = state => (
  {
    loading: state.contactReducer.loading,
    fields: state.contactReducer.fields,
  }
);

const fieldPropTypes = PropTypes.shape({
  placeholder: PropTypes.string.isRequired,
  maxLenth: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  value: PropTypes.string,
}).isRequired;

Contact.propTypes = {
  updateFieldContact: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  fields: PropTypes.exact({
    firstname: fieldPropTypes,
    lastname: fieldPropTypes,
    email: fieldPropTypes,
    subject: fieldPropTypes,
  }).isRequired,
};


export default connect(mapStateToProps, actions)(Contact);
