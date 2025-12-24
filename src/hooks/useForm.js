import {useState} from 'react';

export const validateFormHelper = (name, value, fieldValidations) => {
  const validation = fieldValidations.validation || [];
  const error = [];
  validation.forEach(item => {
    switch (item.type) {
      case 'maxLength':
        if (value.length > item.value) {
          error.push(item.message);
        }
        break;
      case 'minLength':
        if (value.length < item.value) {
          error.push(item.message);
        }
        break;
      case 'characters':
        if (!item.regex.test(value)) {
          error.push(item.message);
        }
        break;
      case 'numeric':
        if (!item.regex.test(value)) {
          error.push(item.message);
        }
        break;
      case 'email':
        if (!item.regex.test(value)) {
          error.push(item.message);
        }
        break;
      case 'alphaNumeric':
        if (!item.regex.test(value)) {
          error.push(item.message);
        }
        break;
      case 'alphaNumericWithSpecialChar':
        if (!item.regex.test(value)) {
          error.push(item.message);
        }
        break;
      default:
        break;
    }
  });
  return error;
};

export const validateAllFormValidations = (schema, formData) => {
  let errors = {};
  schema.forEach(key => {
    if (key.isRequired) {
      if (
        Array.isArray(formData[key.name]) &&
        formData[key.name].length === 0
      ) {
        errors[key.name] = ['This field is required'];
      }
      if (
        typeof formData[key.name] === 'string' &&
        !formData[key.name].trim()
      ) {
        errors[key.name] = ['This field is required'];
      }
      if (!formData[key.name]) {
        errors[key.name] = ['This field is required'];
      }
    }
    const error = formData[key.name]
      ? validateFormHelper(key.name, formData[key.name], key)
      : [];
    if (error.length > 0) {
      errors[key.name] = error;
    }
  });
  return errors;
};

export default function useForm(initialState = {}) {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = event => {
    const {name, value} = event.target;
    if (error[name]) {
      setError({...error, [name]: ''});
    }
    setFormData({...formData, [name]: value});
  };

  const handleChange = (name, value) => {
    if (error[name]) {
      setError({...error, [name]: ''});
    }
    setFormData({...formData, [name]: value});
  };

  const handleSelectChange = (value, action) => {
    setFormData(prev => ({...prev, [action.name]: value?.value}));
    if (error[action.name]) {
      setError({...error, [action.name]: ''});
    }
  };

  const validateForm = validationSchema => {
    const inputSchema = validationSchema;
    const error = validateAllFormValidations(inputSchema, formData);
    setError(error);
    return error;
  };

  return {
    handleInputChange,
    handleSelectChange,
    validateForm,
    formData,
    setFormData,
    isSubmitted,
    error,
    setError,
    handleChange,
  };
}
