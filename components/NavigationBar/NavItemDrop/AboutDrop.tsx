"use client";

import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ChevronDownIcon } from "@/components/icons";

export default function AboutDrop() {
  return (
    <Dropdown>
      <div className="group">
        <div className="menu-hover">
          <DropdownTrigger>
            <Link
              href="./about"
              isBlock
              showAnchorIcon
              anchorIcon={<ChevronDownIcon className="text-sm" />}
              color="foreground"
              className="hidden md:flex gap-1 justify-start ml-2"
            >
              Về chúng tôi
            </Link>
          </DropdownTrigger>
        </div>
        <div className="invisible group-hover:visible">
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </div>
      </div>
      ,
    </Dropdown>
  );
}
