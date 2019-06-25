import { connect } from 'react-redux';
import NewsBar from './NewsBar';
import { changeTag } from '../../redux/News/newsActions';

const mapDispatchToProps = { changeTag };

export default connect(
  null,
  mapDispatchToProps,
)(NewsBar);
