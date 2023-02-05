import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Application
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Links from './components/Links';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Links />
      }
    ]
  }
]);

root.render(<RouterProvider router={router} />);