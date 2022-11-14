import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SharedLayout from './uiComponents/SharedLayout';
import Home from './uiComponents/Home'
import ProductsPage from './uiComponents/ProductsPage'
import Error from './uiComponents/Error'
//materailUi baseline Styling applied
import { CssBaseline} from '@mui/material'
//redux state
import { store } from './app/store';
import {Provider} from 'react-redux'
function App() {

  return (
    <>
      <CssBaseline/>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element = {<SharedLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path='/products' element = {<ProductsPage/>}/>
            </Route>
            <Route path='*' element = {<Error/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
