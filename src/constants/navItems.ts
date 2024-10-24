import { iNavItem } from "@/types/Navbar";
import { navItemMaker } from "@/utils/navItemMaker";

export const NavItems: iNavItem[] = navItemMaker([
  {
    url: "#",
    label: "Home",
  },
  {
    url: "#about-se",
    label: "About",
  },
  {
    url: "#blog-se",
    label: "Blog",
  },
  {
    url: "#contact-se",
    label: "Contact",
  },
]);
