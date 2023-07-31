export const filds = {
  email: {
    label: 'Email:',
    name: 'email',
    type: 'email',
    placeholder: 'Input email',
    required: true,
    pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i',
    margin: 'normal',

    autoComplete: 'off',
  },
  password: {
    label: 'Password:',
    name: 'password',
    type: 'password',
    placeholder: 'Input password',
    required: true,
    margin: 'normal',
    autoComplete: 'off',
  },
};
