import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../../pages/catalog/catalog';
import { RouterPaths } from '../../consts/router-paths';
import { ProductPage } from '../../pages/product/product';
import { Modal } from '../popups/modal';
import { NotFoundPage } from '../../pages/not-found/not-found';

export function App ():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
              <Route path={RouterPaths.catalog} element={<CatalogPage />} />
              {/* тут APIRoutes хороший вариант, не надо использовать шаблонную строку напрямую, функция выглядит понятней и проще*/ }     
        <Route path={`${RouterPaths.product}/:id`} element={<ProductPage/>} />
        <Route path={RouterPaths.notFound} element={<NotFoundPage/>}/>
      </Routes>
      <Modal/>
    </BrowserRouter>
  );
}

