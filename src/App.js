import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//materailUi baseline Styling applied
import { CssBaseline} from '@mui/material'
//redux state
import { store } from './app/store';
import {Provider} from 'react-redux'
import SharedLayout from './pages/SharedLayout'
import Error from './pages/Error';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <CssBaseline/>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element = {<SharedLayout/>}>
              <Route index element = {<Home/>}/>
              <Route path='/:id' element = {<ProductDetails/>}/>
            </Route>
            <Route path='*' element = {<Error/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
