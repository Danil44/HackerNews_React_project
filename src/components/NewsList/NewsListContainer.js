import { connect } from 'react-redux';
import { fetchNews, fetchNewsWithQuery } from '../../redux/News/NewsOperations';
import NewsList from './NewsList';
import { getNewsTag, getItems } from '../../redux/News/NewsSelectors';

const mapStateToProps = state => ({
  tag: getNewsTag(state),
  items: getItems(state),
});

const mapDispatchToProps = {
  fetchNews,
  fetchNewsWithQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
