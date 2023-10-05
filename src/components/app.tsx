import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../pages/catalog';
import { RouterPaths } from '../consts/router-paths';

export function App ():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.main} element={<CatalogPage/>} />
        {/* <Route path={`${RouterPaths.quest}/:id`} element={<QuestPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

