import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './not-found';
import { BrowserRouter } from 'react-router-dom';


describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404 Not Found';
    const expectedLinkText = 'Вернуться на главную';

    render(
      <BrowserRouter>
        <NotFoundPage/>
      </BrowserRouter>
    );

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
