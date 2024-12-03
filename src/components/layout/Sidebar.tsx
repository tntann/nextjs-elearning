"use client";
import React from "react";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import Link from "next/link";
import { IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="hidden p-5 border-r bgDarkMode borderDarkMode lg:flex flex-col fixed top-0 left-0 bottom-0 w-[300px]">
      <Link
        href="/"
        className="font-bold text-2xl inline-flex items-center gap-2 mb-5 h-10 self-start"
      >
        <span className="size-10 rounded-lg flex items-center justify-center text-lg text-primary border dark:border-gray-700">
          U
        </span>
        <span className="text-primary">learning</span>
      </Link>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-3">
        <ModeToggle />
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-2"
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export const MenuItem = ({
  url = "/",
  title = "",
  icon,
  onlyIcon,
}: TMenuItem) => {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {onlyIcon ? null : title}
      </ActiveLink>
    </li>
  );
};

export default Sidebar;
