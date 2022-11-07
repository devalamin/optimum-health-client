import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Components/Routes/Routes/Routes';

function App() {
  return (
    <div className='mx-24'>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
