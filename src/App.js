import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import House from './components/House';
import Book from './Book';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Header />


     <Routes>
        <Route path='' element={<Home />} />
  
        <Route path='list' element={<House />} />
  
        <Route path='add' element={<Add />} />
        <Route path='edit/:id' element={<Edit />} />
        <Route path='view/:id' element={<View />} />
        <Route path='book/:id' element={<Book />} />
        <Route path='login' element={<Login />} />
        <Route path='sign' element={<Signup />} />

  
     </Routes>



      <Footer />



    </div>
  );
}

export default App;
