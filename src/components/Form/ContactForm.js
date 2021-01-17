import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/contact/contact-action';
import './ContactForm.css';

function ContactForm({ onSubmit, contact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const auditContact = contact.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (auditContact) {
      alert(`Контакт ${name} з таким ім’ям вже є.`);
      reset();
      return;
    }
    onSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className="item__form" onSubmit={handleSubmit}>
      <label>
        Ім’я
        <input
          className="item__input"
          type="text"
          name="name"
          placeholder="Jony Dep"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Телефон
        <input
          className="item__input"
          type="text"
          name="number"
          placeholder="111-11-11"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={name === '' || number === ''}>
        Зберегти контакт
      </button>
    </form>
  );
}
const mapStateToProps = ({ contacts: { contact } }) => ({
  contact,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
