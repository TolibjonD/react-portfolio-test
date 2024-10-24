import { iNavItem } from "@/types/Navbar";
import { navItemMaker } from "@/utils/navItemMaker";

export const NavItems: iNavItem[] = navItemMaker([
  {
    url: "Home-page",
    label: "Home",
  },
  {
    url: "About-page",
    label: "About",
  },
  {
    url: "work-page",
    label: "Work",
  },
  {
    url: "contact-section",
    label: "Contact",
  },
]);
