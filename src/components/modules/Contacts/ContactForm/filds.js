export const filds = {
  name: {
    label: 'Name:',
    name: 'name',
    type: 'text',
    placeholder: 'Input name',
    required: true,
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    margin: 'normal',
    style: {
      backgroundColor: '#fff',
      borderRadius: '4px',
    },
  },
  number: {
    label: 'Number',
    name: 'number',
    type: 'text',
    placeholder: 'Input number',
    required: true,
    margin: 'normal',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',

    style: {
      backgroundColor: '#fff',
      borderRadius: '4px',
    },
  },
};
