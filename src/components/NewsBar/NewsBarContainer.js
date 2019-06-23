import { connect } from 'react-redux';
import NewsBar from './NewsBar';
import { changeTag } from '../../redux/NewsBar/NewsBarActions';
import { getNewsTag } from '../../redux/NewsBar/NewsBarSelectors';

const mapStateToProps = state => ({
  tag: getNewsTag(state),
});

const mapDispatchToProps = { changeTag };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsBar);
