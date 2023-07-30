import { useState } from 'react';

const UseForm = ({ onSubmit, initialState, isRest = true }) => {
  const [state, setState] = useState({ ...initialState });
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checked' ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    if (isRest) {
      setState({ ...initialState });
    }
  };
  return { state, setState, handleSubmit, handleChange };
};

export default UseForm;
