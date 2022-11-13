import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SharedLayout from './uiComponents/SharedLayout';
import Home from './uiComponents/Home'
import ProductsPage from './uiComponents/ProductsPage'
import Error from './uiComponents/Error'
//materailUi baseline Styling applied
import { CssBaseline} from '@mui/material'


function App() {

  return (
    <>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element = {<SharedLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path='/products' element = {<ProductsPage/>}/>
          </Route>
          <Route path='*' element = {<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
