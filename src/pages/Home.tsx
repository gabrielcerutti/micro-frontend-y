import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardDemo from '../components/CardDemo';
import PaperDemo from '../components/PaperDemo';
import ButtonDemo from '../components/ButtonDemo';
import ChipDemo from '../components/ChipDemo';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  textLeft: {
    textAlign: 'left',
  },
  link: {
    color: '#f5b348',
  },
}));

const HomePage = (props: { basePath: string | undefined }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.textLeft} variant="h4" component="h4">
        Simple Material UI Demo
      </Typography>
      <Typography className={classes.textLeft} variant="h5" component="h5">
        This Micro-Frontend has its own host in{' '}
        <a
          className={classes.link}
          href="https://gabrielcerutti.github.io/micro-frontend-y"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </a>{' '}
        and can be independently developed and deployed.
      </Typography>
      <Typography className={classes.textLeft} variant="h6" component="h6">
        Try the{' '}
        <NavLink className={classes.link} to="/this-page-does-not-exist">
          Not Found Page
        </NavLink>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ChipDemo></ChipDemo>
        </Grid>
        <Grid item xs={6}>
          <ButtonDemo></ButtonDemo>
        </Grid>
      </Grid>

      <CardDemo basePath={props.basePath}></CardDemo>
      <PaperDemo></PaperDemo>
    </>
  );
};

export default HomePage;
