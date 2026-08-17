import { useState, useEffect } from "react";

import Menu from "./components/Menu/Menu";
import HomeIcon from "./assets/icons/home.svg";
import UserIcon from "./assets/icons/user.svg";
import WorldIcon from "./assets/icons/world.svg";
import SettingsIcon from "./assets/icons/settings.svg";
import SettingsSlidersIcon from "./assets/icons/settings-sliders.svg";
import EnvelopeIcon from "./assets/icons/envelope.svg";
import AngleRightIcon from "./assets/icons/angle-right.svg";
import CloseIcon from "./assets/icons/close.svg";
import { Routes, Route, NavLink } from "react-router-dom";
import {
    itemControlClass,
    itemLabelClass,
    itemIconClass,
    submenuClass,
    subitemClass,
    layoutClass,
    contentClass,
    sidebarClass,
    logoClass,
    listClass,
    itemClass,
    toggleWrapClass,
    toggleClass,
    toggleIconClass,
} from "./appClasses";

// собираем и передаем готовыми слотами.
// приложение само решает, какой слот использовать и как его стилизовать (компонент меню не ищет в children служебные элементы).
function getSheetSlots() {
    return {
        overlay: <Menu.Overlay />,
        title: <Menu.Title />,
        close: (
            <Menu.Close aria-label="Close">
                <CloseIcon />
            </Menu.Close>
        ),
    };
}

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        () => localStorage.getItem("IS_SIDEBAR_OPEN") === "true"
    );
    
    useEffect(() => {
        localStorage.setItem("IS_SIDEBAR_OPEN", String(isSidebarOpen));
    }, [isSidebarOpen]);

    return (
        <div className={layoutClass}>
            <Menu 
                isSidebarOpen={isSidebarOpen} 
                setIsSidebarOpen={setIsSidebarOpen}
            >
                <Menu.Sidebar className={sidebarClass}>
                    <Menu.ShortLogo>
                        <div className={logoClass}>HC</div>
                    </Menu.ShortLogo>
                    <Menu.FullLogo>
                        <div className={logoClass}>HelloClient</div>
                    </Menu.FullLogo>
                    <Menu.List className={listClass}>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger asComponent={NavLink} to="/" className={itemControlClass}>
                                <HomeIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>Home</Menu.Label>
                            </Menu.Trigger>
                        </Menu.Item>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger asComponent={NavLink} to="/about" className={itemControlClass}>
                                <WorldIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>About</Menu.Label>
                            </Menu.Trigger>
                        </Menu.Item>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger asComponent={NavLink} to="/contact" className={itemControlClass}>
                                <UserIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>Contact</Menu.Label>
                            </Menu.Trigger>
                        </Menu.Item>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger className={itemControlClass}>
                                <SettingsSlidersIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>Services</Menu.Label>
                            </Menu.Trigger>
                            <Menu.Submenu className={submenuClass} {...getSheetSlots()}>
                                <Menu.SubItem asComponent={NavLink} to="/services" className={subitemClass}>
                                    Services
                                </Menu.SubItem>
                            </Menu.Submenu>
                        </Menu.Item>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger asComponent={NavLink} to="/products" className={itemControlClass}>
                                <EnvelopeIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>Products</Menu.Label>
                            </Menu.Trigger>
                        </Menu.Item>
                        <Menu.Item className={itemClass}>
                            <Menu.Trigger className={itemControlClass}>
                                <SettingsIcon className={itemIconClass} />
                                <Menu.Label className={itemLabelClass}>Settings</Menu.Label>
                            </Menu.Trigger>
                            <Menu.Submenu className={submenuClass} {...getSheetSlots()}>
                                <Menu.SubItem asComponent={NavLink} to="/profile" className={subitemClass}>
                                    Profile
                                </Menu.SubItem>
                                <Menu.SubItem asComponent={NavLink} to="/security" className={subitemClass}>
                                    Security
                                </Menu.SubItem>
                            </Menu.Submenu>
                        </Menu.Item>
                    </Menu.List>
                    <div className={toggleWrapClass}>
                        <Menu.Toggle className={toggleClass}>
                            <AngleRightIcon className={toggleIconClass} />
                        </Menu.Toggle>
                    </div>
                </Menu.Sidebar>
            </Menu>
            <div className={contentClass}>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/about" element={<div>About</div>} />
                    <Route path="/contact" element={<div>Contact</div>} />
                    <Route path="/services" element={<div>Services</div>} />
                    <Route path="/products" element={<div>Products</div>} />
                    <Route path="/settings" element={<div>Settings</div>} />
                    <Route path="/profile" element={<div>Profile</div>} />
                    <Route path="/security" element={<div>Security</div>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
