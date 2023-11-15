"use client";

import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ChevronDownIcon } from "@/components/icons";

export default function ServicesDrop() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Link
          href="#"
          isBlock
          showAnchorIcon
          anchorIcon={<ChevronDownIcon className="text-sm" />}
          color="foreground"
          className="hidden md:flex gap-1 justify-start ml-2"
        >
          Dịch vụ
        </Link>
      </DropdownTrigger>

      <DropdownMenu variant="faded" aria-label="Static Actions" onAction={(key) => alert(key)}>
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}