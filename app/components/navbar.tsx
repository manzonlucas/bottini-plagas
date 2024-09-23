import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/app/config/site";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="italic">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 mr-auto max-w-fit">
          <NextLink className="flex flex-col items-center mr-auto align-middle" href="/">
            <h1 className="text-4xl font-bold tracking-widest">BOTTINI</h1>
            <div className="pr-1 transform -skew-x-12 bg-primary">
              <p className="italic transform skew-x-12">Controladores de plagas</p>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="justify-between hidden gap-4 ml-2 sm:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                <div className="pr-1 transition-colors duration-200 transform -skew-x-12 bg-transparent hover:bg-primary">
                  <p className="italic transform skew-x-12">{item.label}</p>
                </div>
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
