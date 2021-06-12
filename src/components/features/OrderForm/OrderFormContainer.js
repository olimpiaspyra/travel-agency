import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux.js';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
