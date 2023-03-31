import { FC } from 'react';
import style from './App.module.scss';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Catalog from './../pages/Сatalog/Сatalog';
import { Route, Routes, Navigate } from 'react-router-dom';
import Basket from '../pages/Basket/Basket';
import CatalogItem from '../pages/CatalogItem/CatalogItem';

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Navigation />
        <div className={style.main}>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/item" element={<CatalogItem />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default App;
