import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Category from './Pages/Category'
function App() {
  return (
    <div className="App">
      <Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/:items' element={<Category />} />
<Route path='/:id/:title' element={<Category />} />

</Routes>


    </div>
  );
}

export default App;
