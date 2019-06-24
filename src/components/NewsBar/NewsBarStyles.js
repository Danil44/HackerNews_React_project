import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 90,
  },
  container: {
    backgroundColor: teal[900],
  },
});

export default useStyles;
