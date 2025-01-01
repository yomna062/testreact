import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componnent/Home/Home.jsx'; // Adjust the path according to your project structure
import Contact from './Componnent/Contact/Contact.jsx'; 
import Portfolio from './Componnent/Portfolio/Portfolio.jsx';
import Layout from './Componnent/Layout/Layout.jsx';
import About from './Componnent/About/About';
import Not_found from './Componnent/Notfound/Not_found.jsx';



function App() {


  // Define routes using createBrowserRouter
  const routers = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />, // Layout component will wrap the children routes
      children: [
        { index: true, element: <Home /> }, // Default route when path is '/'
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: '*', element: <Not_found/> },  // Handle unknown routes
      ],
    },
  ]
, {
  basename: '/Start_React'
});

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
    
  );

}

export default App;
