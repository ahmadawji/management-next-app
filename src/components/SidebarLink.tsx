"use client";
import Link from "next/link";
import React from "react";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface Link {
  label: string;
  icon: string;
  link: string;
}

export const SidebarLink = ({ link }: { link: Link }) => {
  const icons = { Settings, User, Grid, Calendar };
  const pathName = usePathname();
  let isActive = false;
  const Icon = icons[link.icon as keyof typeof icons];

  if (pathName === link.link) {
    isActive = true;
  }

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};
