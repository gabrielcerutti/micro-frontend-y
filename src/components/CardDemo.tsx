import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import hastaLuego from '../assets/images/hasta_luego.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textLeft: {
    textAlign: 'left',
  },
}));

const usePlayerStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const CardDemo = (props: { basePath: string | undefined }) => {
  const classes = useStyles();
  const playerClasses = usePlayerStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            dic{bull}ta{bull}tor{bull}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            noun
          </Typography>
          <Typography variant="body2" component="p">
            a person who behaves in an autocratic way
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className={playerClasses.root}>
        <div className={playerClasses.details}>
          <CardContent className={playerClasses.content}>
            <Typography component="h5" variant="h5">
              Hasta Luego
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Los Rodriguez
            </Typography>
          </CardContent>
          <div className={playerClasses.controls}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={playerClasses.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={playerClasses.cover}
          image={`${props.basePath !== undefined ? props.basePath : ''}${hastaLuego}`}
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default CardDemo;
