import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, removeTags, addTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: duration => dispatch (changeDuration(duration)),
  removeTags: tags=> dispatch (removeTags(tags)),
  addTags: tags => dispatch (addTags(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
