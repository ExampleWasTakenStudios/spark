import { TMDB } from '@tdanks2000/tmdb-wrapper';
import { useContext } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';

const TMDBProviderContext = createContext<TMDB | null>(null);

interface TMDBProviderProps {
  tmdb: TMDB;
  children: ReactNode;
}

export const TMDBProvider = ({ tmdb, children }: TMDBProviderProps) => {
  return <TMDBProviderContext.Provider value={tmdb}>{children}</TMDBProviderContext.Provider>;
};

export const useTMDB = () => {
  const context = useContext(TMDBProviderContext);

  if (context === undefined) {
    throw new Error('useTMDB() must be used within a TMDBProvider');
  }

  return context;
};
