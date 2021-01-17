import { connect } from 'react-redux';
import { changeFilter } from '../redux/contact/contact-action';
import './Filter.css';
function Filter({ value, onChange }) {
  return (
    <label className="item__filter">
      <p className="item__text-filter">Пошук контактів</p>
      <input
        className="item__element"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
