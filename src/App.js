import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Products from './Pages/Products'
function App() {
  return (
    <div className="App">
      <Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path=':category' element={<Category />} />
<Route path='/:id/:title' element={<Products />} />

</Routes>


    </div>
  );
}

export default App;
