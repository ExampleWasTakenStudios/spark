import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { NAV_ROUTES } from '@/lib/routes';
import { Theme, useTheme } from '@/providers/ThemeProvider';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NavbarFooterContainer = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-row justify-around items-center p-6">
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-superlight">spark</SheetTitle>
              </SheetHeader>

              <ScrollArea>
                <SidebarProvider className="flex flex-col">
                  {NAV_ROUTES.map((routeGroup) => {
                    return (
                      <SidebarGroup>
                        <SidebarGroupLabel>{routeGroup.title}</SidebarGroupLabel>

                        {routeGroup.routes.map((route) => {
                          return (
                            <SidebarMenuItem key={route.title}>
                              <SidebarMenuButton asChild>
                                <Link to={route.path}>
                                  <route.icon />
                                  <span>{route.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarGroup>
                    );
                  })}
                </SidebarProvider>
              </ScrollArea>

              <SheetFooter>Hello world!</SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <Link to="/" className="text-4xl font-superlight align-middle">
          spark
        </Link>
        {/* Desktop Navbar */}
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="Popular" href="/movies/popular">
                    Discover what other people watch.
                  </ListItem>
                  <ListItem title="Now Playing" href="/movies/now-playing">
                    Movies that are currently in theaters.
                  </ListItem>
                  <ListItem title="Top Rated" href="/movies/top-rated">
                    Discover what other people like with Top Rated Movies only.
                  </ListItem>
                  <ListItem title="Upcoming" href="/movies/upcoming">
                    Discover what the future holds and plan your next visit to your local theater.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>TV Shows</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="Airing Today" href="/tv/airing-today">
                    Don&apos;t now what to watch tonight? See what&apos;s on.
                  </ListItem>
                  <ListItem title="On the Air" href="/tv/on-the-air">
                    Get an overview of what&apos;s airing in the next seven days.
                  </ListItem>
                  <ListItem title="Popular" href="/tv/popular">
                    Seeking inspiration? Discover what other people are currently into.
                  </ListItem>
                  <ListItem title="Top Rated" href="/tv/top-rated">
                    Find the perfect match with Top Rated shows only.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Desktop Account Section */}
        <div className="sm:flex flex-row justify-between items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="not-found.png" />
                <AvatarFallback>NZ</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem disabled>Details</DropdownMenuItem>
                <DropdownMenuItem disabled>Favorite Movies</DropdownMenuItem>
                <DropdownMenuItem disabled>Favorite TV Shows</DropdownMenuItem>
                <DropdownMenuItem disabled>My Lists</DropdownMenuItem>
                {/* <DropdownMenuSub>
                  <DropdownMenuSubTrigger disabled>My Ratings</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-40">
                      <DropdownMenuItem>Movies</DropdownMenuItem>
                      <DropdownMenuItem>TV Shows</DropdownMenuItem>
                      <DropdownMenuItem>TV Episodes</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger disabled>My Watchlists</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-40">
                      <DropdownMenuItem>Movies</DropdownMenuItem>
                      <DropdownMenuItem>TV Shows</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub> */}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuRadioGroup onValueChange={(value) => setTheme(value as Theme)}>
                <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="dark:bg-foreground" decorative />

      {/* <Outlet /> */}
      <div className="hidden sm:flex h-[1500px] w-full justify-center items-center">
        <p>This is a placeholder for now.</p>
      </div>
    </>
  );
};

const ListItem = ({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) => {
  return (
    <li className="list-none" {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug w-fit">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
