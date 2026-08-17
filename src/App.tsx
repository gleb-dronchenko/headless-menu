import { useState, useEffect } from "react";

import HeadlessMenu from "./components/HeadlessMenu/HeadlessMenu";
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
    openBtnWrapClass,
    openBtnClass,
    openBtnIconClass,
} from "./appClasses";

// получаем слоты для мобильного подменю
// передаем через props слоты для мобильного подменю для того чтобы не переписывать их в каждом подменю
// передаем через пропсы чтобы не парсить их из children по типу компонента
// слоты можно стилизовать через className на Overlay / Title / Close
function getSheetSlots() {
    return {
        overlay: <HeadlessMenu.Overlay />,
        title: <HeadlessMenu.Title />,
        close: (
            <HeadlessMenu.Close aria-label="Close">
                <CloseIcon />
            </HeadlessMenu.Close>
        ),
    };
}

function App() {
    const [isSidebarOpened, setIsSidebarOpened] = useState(
        () => localStorage.getItem("IS_SIDEBAR_OPENED") === "true"
    );
    
    useEffect(() => {
        localStorage.setItem("IS_SIDEBAR_OPENED", String(isSidebarOpened));
    }, [isSidebarOpened]);

    return (
        <div className={layoutClass}>
            <HeadlessMenu 
                isSidebarOpened={isSidebarOpened} 
                setIsSidebarOpened={setIsSidebarOpened}
            >
                <HeadlessMenu.Sidebar className={sidebarClass}>
                    <HeadlessMenu.ShortLogo>
                        <div className={logoClass}>HC</div>
                    </HeadlessMenu.ShortLogo>
                    <HeadlessMenu.FullLogo>
                        <div className={logoClass}>HelloClient</div>
                    </HeadlessMenu.FullLogo>
                    <HeadlessMenu.List className={listClass}>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger asComponent={NavLink} to="/" className={itemControlClass}>
                                <HomeIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Home</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger asComponent={NavLink} to="/about" className={itemControlClass}>
                                <WorldIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>About</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger asComponent={NavLink} to="/contact" className={itemControlClass}>
                                <UserIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Contact</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger className={itemControlClass}>
                                <SettingsSlidersIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Services</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                            <HeadlessMenu.Submenu className={submenuClass} {...getSheetSlots()}>
                                <HeadlessMenu.Subitem asComponent={NavLink} to="/services" className={subitemClass}>
                                    Services
                                </HeadlessMenu.Subitem>
                            </HeadlessMenu.Submenu>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger asComponent={NavLink} to="/products" className={itemControlClass}>
                                <EnvelopeIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Products</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className={itemClass}>
                            <HeadlessMenu.Trigger className={itemControlClass}>
                                <SettingsIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Settings</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                            <HeadlessMenu.Submenu className={submenuClass} {...getSheetSlots()}>
                                <HeadlessMenu.Subitem asComponent={NavLink} to="/profile" className={subitemClass}>
                                    Profile
                                </HeadlessMenu.Subitem>
                                <HeadlessMenu.Subitem asComponent={NavLink} to="/security" className={subitemClass}>
                                    Security
                                </HeadlessMenu.Subitem>
                            </HeadlessMenu.Submenu>
                        </HeadlessMenu.Item>
                    </HeadlessMenu.List>
                    <div className={openBtnWrapClass}>
                        <HeadlessMenu.OpenBtn className={openBtnClass}>
                            <AngleRightIcon className={openBtnIconClass} />
                        </HeadlessMenu.OpenBtn>
                    </div>
                </HeadlessMenu.Sidebar>
            </HeadlessMenu>
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
