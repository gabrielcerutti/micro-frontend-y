import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { MicrofrontendOptions } from './microfrontend';
import reportWebVitals from './reportWebVitals';

/* 
  This is commented out because this micro-frontend is following a different approach.
  It's not using react-app-rewired to build the app, so the entry point is the regular entry point for a react app.
  That's why we have to comment this piece of code and add global functions to be able to load the app into the Main SPA
*/
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {/* Pass an empty basePath if you are not using GitHub Pages and just localhost as a base URL */}
//       <App basePath="/micro-frontend-y" host="" />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

declare global {
  interface Window {
    renderMicroAppY: (containerId: string, options: MicrofrontendOptions) => void;
  }
  interface Window {
    unMountMicroAppY: (containerId: string) => void;
  }
}

window.renderMicroAppY = (containerId: string, options: MicrofrontendOptions) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.render(
    <React.StrictMode>
      {/* Use HashRouter if your host doesn't support browser history (like GitHub Pages) */}
      {/* Use BrowserRouter for a production app hosted in its own domain */}
      {/* <HashRouter> */}
      <BrowserRouter>
        <App basePath={options.basePath} host={options.host} {...options.data} />
      </BrowserRouter>
    </React.StrictMode>,
    container
  );
  console.log(`Micro-frontend ${containerId} mounted`);
};

window.unMountMicroAppY = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
  console.log(`Micro-frontend ${containerId} unmounted`);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
