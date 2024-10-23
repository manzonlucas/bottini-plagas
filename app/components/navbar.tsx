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
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { SkewedText } from "./skewedText";
import SmoothScrollLink from "./smoothScrollLink";

import { siteConfig } from "@/app/config/site";
import { useState } from "react";

export const Navbar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  const handleToggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }

  return (
    <NextUINavbar className="italic border-b-1 border-b-default" maxWidth="xl" isMenuOpen={isNavBarOpen}>
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
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <NavbarMenuToggle onClick={handleToggleNavBar} />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col mx-4 mt-2">
          {siteConfig.navItems.map((item, index) => (
            <div key={`${item}-${index}`}>
              <NavbarMenuItem onClick={handleToggleNavBar} className="py-4 text-2xl">
                <SmoothScrollLink href={item.href}>
                  {item.label}
                </SmoothScrollLink>
              </NavbarMenuItem>
              <hr className="w-full border-t border-black/60 opacity-20" />
            </div>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar >
  );
};
