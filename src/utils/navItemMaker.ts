import { iNavItem } from "@/types/Navbar";
import { v4 as uuidv4 } from "uuid";

type NavItem = Partial<Pick<iNavItem, "id">> & Omit<iNavItem, "id">;

export const navItemMaker = (items: NavItem[]): iNavItem[] => {
  const newItems: iNavItem[] = items.map((item) => ({
    ...item,
    id: uuidv4(),
  }));
  return newItems;
};
