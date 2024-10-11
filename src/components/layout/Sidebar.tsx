import React from "react";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white dark:border-opacity-10 dark:bg-grayDarker flex flex-col">
      <a
        href="/"
        className="font-bold text-2xl inline-flex items-center gap-2 mb-5 h-10 self-start"
      >
        <span className="size-10 rounded-lg flex items-center justify-center text-lg text-primary border dark:border-gray-700">
          U
        </span>
        E-learning
      </a>
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
      <div className="mt-auto flex items-center justify-end gap-4">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

const MenuItem = ({ url = "/", title = "", icon }: TMenuItem) => {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
};

export default Sidebar;
