import { MenuContext } from "./context";

import Sidebar from "./Sidebar";
import List from "./List";
import Item from "./Item";
import { ShortLogo, FullLogo } from "./Logo";
import OpenBtn from "./OpenBtn";
import Subitem from "./Subitem";
import type { HeadlessMenuProps } from "./types";

function HeadlessMenu(
    props: HeadlessMenuProps,
) {
    const { isSidebarOpened, setIsSidebarOpened, children } = props;

    return (
        <MenuContext.Provider value={{ isSidebarOpen: isSidebarOpened, setIsSidebarOpen: setIsSidebarOpened }}>
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