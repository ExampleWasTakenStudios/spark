import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MutedText } from '@/components/ui/MutedText';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Wordmark } from '@/components/ui/Wordmark';
import { NAV_ROUTES } from '@/lib/routes';
import { Theme, useTheme } from '@/providers/ThemeProvider';
import { Menu } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export const NavbarFooterContainer = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="bg-background sticky top-0 z-50">
        <div className="bg-background/70 backdrop-blur-default flex flex-row justify-around items-center p-6 sticky top-0 left-0 right-0 z-50">
          {/* Mobile Navbar */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-superlight">
                    <Wordmark />
                  </SheetTitle>
                </SheetHeader>

                <ScrollArea>
                  <SidebarProvider className="flex flex-col">
                    {NAV_ROUTES.map((routeGroup) => {
                      return (
                        <SidebarGroup key={routeGroup.title}>
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
            <Wordmark />
          </Link>
          {/* Desktop Navbar */}
          <NavigationMenu delayDuration={0} className="hidden sm:block">
            <NavigationMenuList>
              {NAV_ROUTES.map((routeGroup) => {
                if (routeGroup.routes.length === 1) {
                  return (
                    <NavigationMenuItem key={routeGroup.routes[0].title}>
                      <NavigationMenuLink asChild>
                        <Link to={routeGroup.routes[0].path}>{routeGroup.routes[0].title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={routeGroup.title}>
                    <NavigationMenuTrigger>{routeGroup.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {routeGroup.routes.map((route) => {
                          return (
                            <ListItem title={route.title} href={route.path} key={route.title}>
                              {route.description}
                            </ListItem>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
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
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>My Ratings</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-40">
                        <DropdownMenuItem disabled>Movies</DropdownMenuItem>
                        <DropdownMenuItem disabled>TV Shows</DropdownMenuItem>
                        <DropdownMenuItem disabled>TV Episodes</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>My Watchlists</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-40">
                        <DropdownMenuItem disabled>Movies</DropdownMenuItem>
                        <DropdownMenuItem disabled>TV Shows</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuRadioGroup onValueChange={(value) => setTheme(value as Theme)}>
                  <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" disabled>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* <Separator className="dark:bg-foreground" decorative /> */}
      </div>

      {/* Outlet */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-10 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center w-screen">
          <div>
            <Wordmark />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-baseline gap-2 ml-6">
              <MutedText>powered&nbsp;by</MutedText>
              <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                  alt="Logo of The Movie Database"
                  width={120}
                  height={120}
                />
              </a>
            </div>
          </div>
        </div>
        <MutedText className="text-center">
          &copy; ExampleWasTaken Studios and its contributors 2025
          {new Date().getFullYear() === 2025 ? '' : `-${new Date().getFullYear()}`}
        </MutedText>
      </footer>
    </>
  );
};

const ListItem = ({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) => {
  return (
    <li className="list-none" {...props}>
      <NavigationMenuLink asChild>
        <Link to={href} className="hover:backdrop-blur-default hover:bg-transparent">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug w-fit">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
