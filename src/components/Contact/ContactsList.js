import PropTypes from 'prop-types';
// import { connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contact/contact-action';
import './ContactsList.css';
import { getVisibleContact } from '../redux/contact/contact-selector';

function ContactsList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {!contacts.length && <div>Немає жодного контакту</div>}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="item__contact">
            <p className="item__text">{name}</p>
            <p className="item__text">{number}</p>
            <button
              className="item__buttom"
              onClick={() => onDeleteContact(id)}
            >
              стерти
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default ContactsList;

// const mapStateToProps = state => {
//   const { filter, contact } = state.contacts;
//   const normalize = filter.toLowerCase().trim();
//   const visibleContacts = contact.filter(contact =>
//     contact.name.toLowerCase().includes(normalize),
//   );

//   return { contacts: visibleContacts };
// };
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
