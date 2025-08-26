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
      <div className="bg-background sticky top-0 z-50">
        <div className="flex flex-row justify-around items-center p-6 sticky top-0 z-50">
          {/* Mobile Navbar */}
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
            spark
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
                <DropdownMenuItem variant="destructive" disabled>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Separator className="dark:bg-foreground" decorative />
      </div>

      {/* <Outlet /> */}
      <div className="hidden sm:flex h-[1000px] w-full justify-center items-center bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <p>This is a placeholder for now.</p>
      </div>
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
