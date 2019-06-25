import { connect } from 'react-redux';
import NewsMenu from './NewsMenu';
import { changeTag } from '../../redux/News/newsActions';

const mapDispatchToProps = { changeTag };

export default connect(
  null,
  mapDispatchToProps,
)(NewsMenu);
