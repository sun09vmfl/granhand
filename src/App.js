import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import { Routes, Route } from 'react-router-dom';
import Talk from './components/Talk';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<SideMenu />} />
        <Route path="products">
          <Route index element={<ProductList />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>
      </Routes>
      <Talk />
      <Footer />
    </>
  );
}

export default App;
