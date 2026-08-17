import { MenuContext } from "./context";

import Sidebar from "./Sidebar";
import List from "./List";
import Item from "./Item";
import { ShortLogo, FullLogo } from "./Logo";
import Toggle from "./Toggle";
import SubItem from "./SubItem";
import Submenu from "./Submenu";
import Overlay from "./Overlay";
import Title from "./Title";
import Close from "./Close";
import Trigger from "./Trigger";
import Label from "./Label";
import { useIsMobile } from "./useIsMobile";
import type { MenuProps } from "./types";

function Menu(
    props: MenuProps,
) {
    const {
        isSidebarOpen,
        setIsSidebarOpen,
        mobileQuery,
        children,
    } = props;
    const isMobile = useIsMobile(mobileQuery);

    return (
        <MenuContext.Provider value={
            { 
                isSidebarOpen, 
                setIsSidebarOpen, 
                isMobile 
            }
        }>
            {children}
        </MenuContext.Provider>
    );
}

Menu.ShortLogo = ShortLogo;
Menu.FullLogo = FullLogo;

Menu.Sidebar = Sidebar;
Menu.List = List;
Menu.Item = Item;
Menu.Trigger = Trigger;
Menu.Toggle = Toggle;
Menu.SubItem = SubItem;
Menu.Submenu = Submenu;
Menu.Label = Label;

Menu.Overlay = Overlay;
Menu.Title = Title;
Menu.Close = Close;

export default Menu;