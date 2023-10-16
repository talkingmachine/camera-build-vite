import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../pages/catalog';
import { RouterPaths } from '../consts/router-paths';
import { ProductPage } from '../pages/product';
import { Modal } from './popups/modal';
import { NotFound } from '../pages/not-found';

export function App ():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.catalog} element={<CatalogPage/>} />
        <Route path={`${RouterPaths.product}/:id`} element={<ProductPage/>} />
        <Route path={RouterPaths.notFound} element={<NotFound/>}/>
      </Routes>
      <Modal/>
    </BrowserRouter>
  );
}

