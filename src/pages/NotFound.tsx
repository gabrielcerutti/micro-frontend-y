import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  link: {
    color: '#f5b348',
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h4" component="h4">
          Oops! Sorry, Page Not Found
        </Typography>
        <Typography variant="h5" component="h5">
          You should probably go back to the{' '}
          <NavLink className={classes.link} to="/">
            Microfrontend Home
          </NavLink>
        </Typography>
      </div>
    </>
  );
};

export default NotFoundPage;
