import { ComponentType } from 'react';
import { CalendarHeart, Clapperboard, Home, Star, ThumbsUp, Tv, TvMinimalPlay } from 'lucide-react';

interface RouteGroup {
  title: string;
  routes: Route[];
}

interface Route {
  title: string;
  description: string;
  path: string;
  icon: ComponentType;
}

export const NAV_ROUTES: RouteGroup[] = [
  {
    title: 'Home',
    routes: [
      {
        title: 'Home',
        description: '',
        path: '/',
        icon: Home,
      },
    ],
  },
  {
    title: 'Movies',
    routes: [
      {
        title: 'Now Playing',
        description: 'Catch the latest blockbusters now playing on the big screen.',
        path: '/movies/now-playing',
        icon: Clapperboard,
      },
      {
        title: 'Upcoming',
        description: 'Discover upcoming movies and plan your next trip to theaters.',
        path: '/movies/upcoming',
        icon: CalendarHeart,
      },
      {
        title: 'Popular',
        description: 'Seeking inspiration? Discover what other people are currently into.',
        path: '/movies/popular',
        icon: Star,
      },
      {
        title: 'Top Rated',
        description: 'Explore the top rated movies loved by critics and fans alike.',
        path: '/movies/top-rated',
        icon: ThumbsUp,
      },
    ],
  },
  {
    title: 'TV Shows',
    routes: [
      {
        title: 'Airing Today',
        description: "Don't miss out, here's what's hitting your screen tonight.",
        path: '/tv/airing-today',
        icon: TvMinimalPlay,
      },
      {
        title: 'On the Air',
        description: 'Catch up with everything airing across the week, stay tuned daily.',
        path: '/tv/on-the-air',
        icon: Tv,
      },
      {
        title: 'Popular',
        description: "Everyone's talking about these shows, see what's trending right now.",
        path: '/tv/popular',
        icon: Star,
      },
      {
        title: 'Top Rated',
        description: 'Check out the highest-rated shows fans and critics both swear by.',
        path: '/tv/top-rated',
        icon: ThumbsUp,
      },
    ],
  },
  {
    title: 'About',
    routes: [
      {
        title: 'About',
        description: '',
        path: '/about',
        icon: () => <span className="font-superlight">S</span>,
      },
    ],
  },
];

export const ACCOUNT_ROUTES: RouteGroup[] = [
  {
    title: 'My Account',
    routes: [
      {
        title: 'Details',
        path: '/me',
        description: '',
        icon: () => '',
      },
      {
        title: 'Favorite Movies',
        path: '/me/favorite-movies',
        description: '',
        icon: () => '',
      },
      {
        title: 'Favorite TV Shows',
        path: '/me/favorite-tv-shows',
        description: '',
        icon: () => '',
      },
    ],
  },
];
