import { connect } from 'react-redux';
import NewsSearch from './NewsSearch';
import { fetchNewsWithQuery } from '../../redux/News/NewsOperations';

const mapDispatchToProps = {
  onSubmit: query => fetchNewsWithQuery(query),
};

export default connect(
  null,
  mapDispatchToProps,
)(NewsSearch);
