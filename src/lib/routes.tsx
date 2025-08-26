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
        description: 'Movies that are currently in theaters.',
        path: '/movies/now-playing',
        icon: Clapperboard,
      },
      {
        title: 'Upcoming',
        description: 'Discover what the future holds and plan your next visit to your local theater.',
        path: '/movies/upcoming',
        icon: CalendarHeart,
      },
      {
        title: 'Popular',
        description: 'Discover what other people watch.',
        path: '/movies/popular',
        icon: Star,
      },
      {
        title: 'Top Rated',
        description: 'Discover what othe rlike with Top Rated Movies only.',
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
        description: 'Don&apos;t know what to watch tonight? See what&apos;s on.',
        path: '/tv/airing-today',
        icon: TvMinimalPlay,
      },
      {
        title: 'On the Air',
        description: 'Get an overview of what&apos;s airing in the next seven days.',
        path: '/tv/on-the-air',
        icon: Tv,
      },
      {
        title: 'Popular',
        description: 'Seeking inspiration? Discover what other people are currently into.',
        path: '/tv/popular',
        icon: Star,
      },
      {
        title: 'Top Rated',
        description: 'Find the perfect match with Rop Rated shows only.',
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

export const ACCOUNT_ROUTES: RouteGroup[] = [];
