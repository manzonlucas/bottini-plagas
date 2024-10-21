"use client";

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
import clsx from "clsx";
import { SkewedText } from "./skewedText";
import { siteConfig } from "@/app/config/site";
import SmoothScrollLink from "./smoothScrollLink";

export const Navbar = () => {
  return (
    <NextUINavbar className="italic border-b-1 border-b-default" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 mr-auto max-w-fit">
          <SmoothScrollLink
            className="flex flex-col items-center pb-1 mr-auto align-middle"
            href={siteConfig.navItems[0].href}
          >
            <h1 className="text-4xl font-bold tracking-widest">BOTTINI</h1>
            <SkewedText text="Controladores de plagas" />
          </SmoothScrollLink>
        </NavbarBrand>
        <ul className="justify-between hidden gap-4ml-2 sm:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <SmoothScrollLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                <div className="px-2 transition-all duration-200 ease-in-out transform -skew-x-12 bg-transparent hover:bg-primary">
                  <p className="text-xl italic transform skew-x-12">
                    {item.label}
                  </p>
                </div>
              </SmoothScrollLink>

              {/* Prev to SmoothScrollLink */}
              {/* <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                <div className="px-2 transition-all duration-200 ease-in-out transform -skew-x-12 bg-transparent hover:bg-primary">
                  <p className="text-xl italic transform skew-x-12">
                    {item.label}
                  </p>
                </div>
              </NextLink> */}
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
