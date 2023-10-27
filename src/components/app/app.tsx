import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../../pages/catalog/catalog';
import { RouterPaths } from '../../consts/router-paths';
import { ProductPage } from '../../pages/product/product';
import { Modal } from '../popups/modal';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { ScrollToTop } from '../scroll-top';


export function App ():JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={RouterPaths.catalog()} element={<CatalogPage />} />
        <Route path={RouterPaths.productWithAnyId()} element={<ProductPage/>} />
        <Route path={RouterPaths.notFound()} element={<NotFoundPage/>}/>
      </Routes>
      <Modal/>
    </BrowserRouter>
  );
}

