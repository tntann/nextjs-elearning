import React from "react";
import { menuItems } from "@/constants";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/types";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="logo font-bold text-3xl inline-block mb-5">
        <span className="text-primary">E-</span>
        learning
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
