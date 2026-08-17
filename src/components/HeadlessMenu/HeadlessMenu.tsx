import { MenuContext } from "./context";

import Sidebar from "./Sidebar";
import List from "./List";
import Item from "./Item";
import { ShortLogo, FullLogo } from "./Logo";
import OpenBtn from "./OpenBtn";
import Subitem from "./Subitem";
import Submenu from "./Submenu";
import Overlay from "./Overlay";
import Title from "./Title";
import Close from "./Close";
import Trigger from "./Trigger";
import Label from "./Label";
import { useViewportController } from "./useViewportController";
import type { HeadlessMenuProps } from "./types";

function HeadlessMenu(
    props: HeadlessMenuProps,
) {
    const {
        isSidebarOpened,
        setIsSidebarOpened,
        mobileQuery,
        children,
    } = props;
    const { isMobile } = useViewportController(mobileQuery);

    return (
        <MenuContext.Provider value={
            { 
                isSidebarOpen: isSidebarOpened, 
                setIsSidebarOpen: setIsSidebarOpened, 
                isMobile 
            }
        }>
            {children}
        </MenuContext.Provider>
    );
}

// Логотипы
HeadlessMenu.ShortLogo = ShortLogo;
HeadlessMenu.FullLogo = FullLogo;

// Основные компоненты
HeadlessMenu.Sidebar = Sidebar;
HeadlessMenu.List = List;
HeadlessMenu.Item = Item;
HeadlessMenu.Trigger = Trigger;
HeadlessMenu.OpenBtn = OpenBtn;
HeadlessMenu.Subitem = Subitem;
HeadlessMenu.Submenu = Submenu;
HeadlessMenu.Label = Label;

// submenu slots
HeadlessMenu.Overlay = Overlay;
HeadlessMenu.Title = Title;
HeadlessMenu.Close = Close;

export default HeadlessMenu;