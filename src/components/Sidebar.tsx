// import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { SidebarLink } from "./SidebarLink";
import { Card } from "./Card";

interface Link {
  label: string;
  icon: string;
  link: string;
}

const links: Link[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {/* <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div> */}
      {links.map((link: Link) => (
        <SidebarLink link={link} key={link.link} />
      ))}
    </Card>
  );
};

export default Sidebar;
