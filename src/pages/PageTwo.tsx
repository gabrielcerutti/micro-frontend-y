import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const PageTwo = (props: { basePath: string | undefined }) => {
  return (
    <div>
      <header className="App-header App-header-pagetwo">
        <nav>
          <ul className="App-nav">
            <li>
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          src={`${props.basePath !== undefined ? props.basePath : ''}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/pages/PageTwo.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://martinfowler.com/architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Architecture!
        </a>
      </header>
    </div>
  );
};

export default PageTwo;
