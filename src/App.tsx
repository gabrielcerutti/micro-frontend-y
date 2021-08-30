import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './pages/Home';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

function App(props: { basePath: string; host: string }) {
  console.log(`BasePath is ${props.basePath}`);
  console.log(`Host is ${props.host}`);
  let basePath = '';
  if (props.basePath !== '' && props.host !== '') {
    basePath = `${props.host}`;
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes basename={props.basePath}>
        <Route path="/" element={<HomePage basePath={basePath}></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
