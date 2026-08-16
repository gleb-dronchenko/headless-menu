import { MenuContext } from "./context";

import Sidebar from "./Sidebar";
import List from "./List";
import Item from "./Item";
import { ShortLogo, FullLogo } from "./Logo";
import OpenBtn from "./OpenBtn";
import Subitem from "./Subitem";
import Submenu from "./Submenu";
import Trigger from "./Trigger";
import Label from "./Label";
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
HeadlessMenu.Trigger = Trigger;
HeadlessMenu.OpenBtn = OpenBtn;
HeadlessMenu.Subitem = Subitem;
HeadlessMenu.Submenu = Submenu;
HeadlessMenu.Label = Label;

export default HeadlessMenu;