import { connect } from 'react-redux';
import NewsBar from './NewsBar';
import { changeTag } from '../../redux/News/NewsActions';
import { getNewsTag } from '../../redux/News/NewsSelectors';

const mapDispatchToProps = { changeTag };

export default connect(
  null,
  mapDispatchToProps,
)(NewsBar);
