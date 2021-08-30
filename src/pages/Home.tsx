import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardDemo from '../components/CardDemo';
import PaperDemo from '../components/PaperDemo';
import ButtonDemo from '../components/ButtonDemo';

const useStyles = makeStyles(() => ({
  textLeft: {
    textAlign: 'left',
  },
}));

const HomePage = (props: { basePath: string | undefined }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.textLeft} variant="h4" component="h3">
        Material UI Demo
      </Typography>
      <CardDemo basePath={props.basePath}></CardDemo>
      <ButtonDemo></ButtonDemo>
      <PaperDemo></PaperDemo>
    </>
  );
};

export default HomePage;
