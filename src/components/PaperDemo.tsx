import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const PaperDemo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} />
      <Paper />
      <Paper elevation={0} />
    </div>
  );
};

export default PaperDemo;
