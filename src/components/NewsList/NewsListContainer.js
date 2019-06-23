import { connect } from 'react-redux';
import { fetchNews } from '../../redux/News/NewsOperations';
import NewsList from './NewsList';
import { getNewsTag, getItems } from '../../redux/News/NewsSelectors';

const mapStateToProps = state => ({
  tag: getNewsTag(state),
  items: getItems(state),
});

const mapDispatchToProps = {
  fetchNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
