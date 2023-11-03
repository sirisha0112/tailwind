import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import ProductsList from './ProductsList';
// import App from "./App";
// import KycPage from './KycPage';
import SignIn from './SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <KycPage /> */}
     <SignIn />
     {/* <ProductsList /> */}
  </React.StrictMode>
);

reportWebVitals();
