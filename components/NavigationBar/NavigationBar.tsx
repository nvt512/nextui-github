import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import ServicesDrop from "./NavItemDrop/ServicesDrop";
import AboutDrop from "./NavItemDrop/AboutDrop";
import BlogDrop from "./NavItemDrop/BlogDrop";

import { Logo } from "@/components/icons";

export const NavigationBar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-1 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit text-xl">LANDCARE</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-x-0 justify-start ml-2">
          <NavbarItem className="hidden md:flex gap-4 justify-start ml-2">
            <Link
              href="./"
              isBlock
              color="foreground"
              className="hidden md:flex gap-1 justify-start ml-2"
            >
              Trang chủ
            </Link>
          </NavbarItem>

          <NavbarItem className="hidden md:flex justify-start ml-2">
            <ServicesDrop />
          </NavbarItem>

          <NavbarItem className="hidden md:flex  justify-start ml-2">
            <AboutDrop />
          </NavbarItem>

          <NavbarItem className="hidden md:flex  justify-start ml-2">
            <BlogDrop />
          </NavbarItem>

          <NavbarItem className="hidden md:flex  justify-start ml-2">
            <Link
              href="./contact"
              isBlock
              color="foreground"
              className="hidden md:flex gap-1 justify-start ml-2"
            >
              Liên hệ
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 "
            href={siteConfig.links.sponsor}
            variant="bordered"
          >
            Đăng nhập
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Đăng ký
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
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
