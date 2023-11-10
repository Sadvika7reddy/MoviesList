import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import SignUp from './component/signup';
import RootLayout from './route/rootLayout';

import Movies from './component/movies';
import Details from './component/details';

function App() {
  
  const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/',element:<SignUp/>},
            {path:'/movies',element:<Movies/>},      
            
        ],
    },    
      ])
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
