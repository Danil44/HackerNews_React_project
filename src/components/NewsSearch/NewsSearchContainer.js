import { connect } from 'react-redux';
import NewsSearch from './NewsSearch';
import { fetchNewsWithQueryStart } from '../../redux/News/newsActions';

const mapDispatchToProps = {
  onSubmit: query => fetchNewsWithQueryStart(query),
};

export default connect(
  null,
  mapDispatchToProps,
)(NewsSearch);
