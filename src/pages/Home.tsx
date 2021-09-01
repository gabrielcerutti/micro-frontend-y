import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardDemo from '../components/CardDemo';
import PaperDemo from '../components/PaperDemo';
import ButtonDemo from '../components/ButtonDemo';
import ChipDemo from '../components/ChipDemo';

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
      <ChipDemo></ChipDemo>
      <CardDemo basePath={props.basePath}></CardDemo>
      <PaperDemo></PaperDemo>
      <ButtonDemo></ButtonDemo>
    </>
  );
};

export default HomePage;
