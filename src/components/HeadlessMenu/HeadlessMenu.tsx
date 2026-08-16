import { useState } from "react";
import { MenuContext } from "./context";

import Sidebar from "./Sidebar";
import List from "./List";
import Item from "./Item";
import { ShortLogo, FullLogo } from "./Logo";
import OpenBtn from "./OpenBtn";
import Subitem from "./Subitem";

function HeadlessMenu(
    { children }: { children: React.ReactNode }
) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

HeadlessMenu.Sidebar = Sidebar;
HeadlessMenu.ShortLogo = ShortLogo;
HeadlessMenu.FullLogo = FullLogo;
HeadlessMenu.List = List;
HeadlessMenu.Item = Item;
HeadlessMenu.OpenBtn = OpenBtn;
HeadlessMenu.Subitem = Subitem;

export default HeadlessMenu;