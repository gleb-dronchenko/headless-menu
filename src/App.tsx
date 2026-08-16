import { useState, useEffect } from "react";

import HeadlessMenu from "./components/HeadlessMenu/HeadlessMenu";
import HomeIcon from "./assets/icons/home.svg";
import UserIcon from "./assets/icons/user.svg";
import WorldIcon from "./assets/icons/world.svg";
import SettingsIcon from "./assets/icons/settings.svg";
import SettingsSlidersIcon from "./assets/icons/settings-sliders.svg";
import EnvelopeIcon from "./assets/icons/envelope.svg";
import AngleRightIcon from "./assets/icons/angle-right.svg";
import { Routes, Route, NavLink } from "react-router-dom";

const itemControlClass =
    "flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors";
const itemLabelClass = "text-sm font-medium whitespace-nowrap";
const itemIconClass = "fill-current shrink-0 w-[20px] h-[20px]";
const submenuAccordionClass = "flex flex-col gap-0.5 mt-1 pl-6";
const submenuFlyoutClass =
    "absolute left-full top-full z-50 ml-2 min-w-[12rem] rounded-lg border border-zinc-200 bg-white shadow-lg px-4 py-2";
const subitemClass = "block rounded-lg px-3 py-2 hover:bg-zinc-100 hover:text-zinc-900";

function App() {
    const [isSidebarOpened, setIsSidebarOpened] = useState(
        () => localStorage.getItem("IS_SIDEBAR_OPENED") === "true"
    );
    
    useEffect(() => {
        localStorage.setItem("IS_SIDEBAR_OPENED", String(isSidebarOpened));
    }, [isSidebarOpened]);

    return (
        <div className="flex flex-start flex-1 min-h-screen">
            <div className="flex flex-col gap-6 w-fit min-w-16 p-3 bg-white border-r border-zinc-200 shadow-sm">
                <HeadlessMenu 
                    isSidebarOpened={isSidebarOpened} 
                    setIsSidebarOpened={setIsSidebarOpened}
                >
                    <HeadlessMenu.Sidebar>
                        <HeadlessMenu.ShortLogo>
                            <div>HC</div>
                        </HeadlessMenu.ShortLogo>
                        <HeadlessMenu.FullLogo>
                            <div>HelloClient</div>
                        </HeadlessMenu.FullLogo>
                        <HeadlessMenu.List>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger as={NavLink} to="/" className={itemControlClass}>
                                    <HomeIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>Home</span> : null}
                                </HeadlessMenu.Trigger>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger as={NavLink} to="/about" className={itemControlClass}>
                                    <WorldIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>About</span> : null}
                                </HeadlessMenu.Trigger>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger as={NavLink} to="/contact" className={itemControlClass}>
                                    <UserIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>Contact</span> : null}
                                </HeadlessMenu.Trigger>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger className={itemControlClass}>
                                    <SettingsSlidersIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>Services</span> : null}
                                </HeadlessMenu.Trigger>
                                <HeadlessMenu.Submenu
                                    className={isSidebarOpened ? submenuAccordionClass : submenuFlyoutClass}
                                >
                                    <HeadlessMenu.Subitem as={NavLink} to="/services" className={subitemClass}>
                                        Services
                                    </HeadlessMenu.Subitem>
                                </HeadlessMenu.Submenu>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger as={NavLink} to="/products" className={itemControlClass}>
                                    <EnvelopeIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>Products</span> : null}
                                </HeadlessMenu.Trigger>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item className="relative">
                                <HeadlessMenu.Trigger className={itemControlClass}>
                                    <SettingsIcon className={itemIconClass} />
                                    {isSidebarOpened ? <span className={itemLabelClass}>Settings</span> : null}
                                </HeadlessMenu.Trigger>
                                <HeadlessMenu.Submenu
                                    className={isSidebarOpened ? submenuAccordionClass : submenuFlyoutClass}
                                >
                                    <HeadlessMenu.Subitem as={NavLink} to="/profile" className={subitemClass}>
                                        Profile
                                    </HeadlessMenu.Subitem>
                                    <HeadlessMenu.Subitem as={NavLink} to="/security" className={subitemClass}>
                                        Security
                                    </HeadlessMenu.Subitem>
                                </HeadlessMenu.Submenu>
                            </HeadlessMenu.Item>
                        </HeadlessMenu.List>
                        <div className="flex justify-end px-1">
                            <HeadlessMenu.OpenBtn className="flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
                                <AngleRightIcon
                                    className={`fill-current transition-transform duration-200 w-[16px] h-[16px] ${
                                        isSidebarOpened ? "rotate-180" : ""
                                    }`}
                                />
                            </HeadlessMenu.OpenBtn>
                        </div>
                    </HeadlessMenu.Sidebar>
                </HeadlessMenu>
            </div>
            <div className="flex flex-1 flex-col bg-zinc-50 text-zinc-900 p-8">
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
