import { connect } from 'react-redux';
// import { fetchNews, fetchNewsWithQuery } from '../../redux/News/NewsOperations';
import NewsList from './NewsList';
import {
  getNewsTag,
  getItems,
  getLoadingStatus,
} from '../../redux/News/newsSelectors';
import {
  fetchNewsStart,
  fetchNewsWithQueryStart,
} from '../../redux/News/newsActions';

const mapStateToProps = state => ({
  tag: getNewsTag(state),
  items: getItems(state),
  isLoading: getLoadingStatus(state),
});

const mapDispatchToProps = {
  fetchNews: tag => fetchNewsStart(tag),
  fetchNewsWithQuery: query => fetchNewsWithQueryStart(query),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
