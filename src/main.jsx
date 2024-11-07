import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importing your main App component
import './index.css'; // Your CSS styles
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx'; // The main layout component
import Home from './components/Home/Home.jsx'; // Home component
import About from './components/About/About.jsx'; // About component
import Contact from './components/Contact/Contact.jsx'; // Contact component
import User from './components/User/User.jsx'; // User component
import Github, { githubInfoLoader } from './components/Github/Github.jsx'; // GitHub component with loader
import UserDetail from './components/User/UserDetail.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contact />} />

      <Route path='user' element={<User />} />

      <Route path='user/:userid' element={<UserDetail />} />

      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
