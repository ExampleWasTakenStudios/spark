import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { NavbarFooterContainer } from '@/routes/NavbarFooterContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SPARK } from '@/lib/constants';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { TMDBProvider } from '@/providers/TmdbProvider';
import { TMDB } from '@tdanks2000/tmdb-wrapper';
import { Landingpage } from '@/routes/Landingpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarFooterContainer />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <TMDBProvider tmdb={new TMDB(SPARK.ACCESS_TOKEN)}>
        <div className="font-geist">
          <RouterProvider router={router} />
        </div>
      </TMDBProvider>
    </ThemeProvider>
  </StrictMode>,
);

/* 

*/
