import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ChipDemo from '../components/ChipDemo';
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
    <Container fixed>
      <Typography className={classes.textLeft} variant="h4" component="h3">
        Material UI Demo
      </Typography>
      <ChipDemo></ChipDemo>
      <CardDemo basePath={props.basePath}></CardDemo>
      <ButtonDemo></ButtonDemo>
      <PaperDemo></PaperDemo>
    </Container>
  );
};

export default HomePage;
