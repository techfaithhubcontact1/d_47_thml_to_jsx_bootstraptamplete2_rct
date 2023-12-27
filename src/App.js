//1. import area
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Error_404 from './components/Error_404';
import { routes } from './layout/routes';

//define area
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Login /> }></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<Layout />}>
             {
              routes.map((cv, idx, arr)=>{
                return <Route key={idx} path={cv.path} element={cv.element}></Route>
              })
             }
          </Route>
          
          <Route path="*" element={<Error_404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//3. export area
export default App;
