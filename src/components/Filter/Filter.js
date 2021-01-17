// import { connect }  from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/contact/contact-action';
import './Filter.css';
import { getFilter } from '../redux/contact/contact-selector';
function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className="item__filter">
      <p className="item__text-filter">Пошук контактів</p>
      <input
        className="item__element"
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        // onChange={onChange}
      />
    </label>
  );
}
export default Filter;
// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
