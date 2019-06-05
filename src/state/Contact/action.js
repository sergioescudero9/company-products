import {
  CONTACT_LOADING,
  CONTACT_SAVED_FAILED,
  CONTACT_SAVED_SUCCESS,
  CONTACT_UPDATE_FIELD,
} from './const';

const loadRequest = () => ({
  type: CONTACT_LOADING,
});

const saveContactSuccess = contact => ({
  type: CONTACT_SAVED_SUCCESS,
  contact,
});

const saveContactFailed = error => ({
  type: CONTACT_SAVED_FAILED,
  error,
});

const saveContact = () => (dispatch, currentState) => {
  dispatch(loadRequest());
  const currentFields = currentState().contactReducer.fields;
  const requestBody = {};
  Object.keys(currentFields).forEach((key) => {
    requestBody[key] = currentFields[key].value;
  });
  fetch(`${process.env.REACT_APP_END_POINT}contacts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  }).then(response => response.json())
    .then((contact) => {
      dispatch(saveContactSuccess(contact));
    }).catch((error) => {
      dispatch(saveContactFailed(error));
    });
};

const updateFieldContact = (key, value) => ({
  type: CONTACT_UPDATE_FIELD,
  key,
  value,
});

export {
  updateFieldContact,
  saveContact,
};
