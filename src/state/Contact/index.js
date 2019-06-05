import {
  CONTACT_LOADING,
  CONTACT_SAVED_FAILED,
  CONTACT_SAVED_SUCCESS,
  CONTACT_UPDATE_FIELD,
} from './const';

const initialState = {
  loading: false,
  fields: {
    firstname: {
      placeholder: 'Your name...',
      maxLenth: 255,
      errorMessage: 'Please write down your first name',
    },
    lastname: {
      placeholder: 'Your last name...',
      maxLenth: 255,
      errorMessage: 'Please write down your last name',
    },
    email: {
      type: 'email',
      placeholder: 'Your email address...',
      maxLenth: 255,
      errorMessage: 'Don’t forget to tell us what your email address is',
    },
    subject: {
      placeholder: 'Let us know your concerns!',
      maxLenth: 500,
      errorMessage: 'Don’t forget to write something to use!',
    },
  },
};

function contact(state = { ...initialState }, { type, key, value }) {
  switch (type) {
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_SAVED_SUCCESS:{
      console.log('HOls', initialState)
      return {
        ...initialState,
      };
    }
     
    case CONTACT_UPDATE_FIELD: {
      const newFields = { ...state.fields };
      newFields[key].value = value;
      newFields[key].touched = true;
      return {
        ...state,
        fields: newFields,
        loading: false,
      };
    }
    case CONTACT_SAVED_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default contact;
