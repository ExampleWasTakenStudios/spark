import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { TMDBProvider } from '@/providers/TmdbProvider';
import { TMDB } from '@tdanks2000/tmdb-wrapper';
import { SPARK } from '@/lib/constants';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <TMDBProvider tmdb={new TMDB(SPARK.ACCESS_TOKEN)}>
        <App />
      </TMDBProvider>
    </ThemeProvider>
  </StrictMode>,
);
