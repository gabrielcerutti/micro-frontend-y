import './App.css';
import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

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
        <Route path="pageone" element={<PageOne basePath={basePath}></PageOne>} />
        <Route path="pagetwo" element={<PageTwo basePath={basePath}></PageTwo>} />
      </Routes>
    </div>
  );
}

export default App;
