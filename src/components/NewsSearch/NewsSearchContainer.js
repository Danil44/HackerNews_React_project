import { connect } from 'react-redux';
import NewsSearch from './NewsSearch';
import { searchNews } from '../../redux/News/NewsOperations';

const mapDispatchToProps = {
  onSubmit: query => searchNews(query),
};

export default connect(
  null,
  mapDispatchToProps,
)(NewsSearch);
