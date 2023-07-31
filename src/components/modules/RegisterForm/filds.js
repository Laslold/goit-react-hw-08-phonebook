export const filds = {
  name: {
    label: 'Name:',
    name: 'name',
    type: 'text',
    placeholder: 'Input name',
    required: true,
    margin: 'normal',

    autoComplete: 'off',
  },
  email: {
    label: 'Email:',
    name: 'email',
    type: 'email',
    placeholder: 'Input email',
    required: true,
    margin: 'normal',

    autoComplete: 'off',
    pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i',
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
