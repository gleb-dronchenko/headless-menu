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
const submenuClass = [
    "flex",
    "data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0.5 data-[orientation=vertical]:mt-1 data-[orientation=vertical]:pl-6",
    "data-[orientation=horizontal]:absolute data-[orientation=horizontal]:left-full data-[orientation=horizontal]:top-full data-[orientation=horizontal]:z-50 data-[orientation=horizontal]:ml-2 data-[orientation=horizontal]:min-w-[12rem] data-[orientation=horizontal]:rounded-lg data-[orientation=horizontal]:border data-[orientation=horizontal]:border-zinc-200 data-[orientation=horizontal]:bg-white data-[orientation=horizontal]:shadow-lg data-[orientation=horizontal]:px-4 data-[orientation=horizontal]:py-2",
].join(" ");
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
            <HeadlessMenu 
                isSidebarOpened={isSidebarOpened} 
                setIsSidebarOpened={setIsSidebarOpened}
            >
                <HeadlessMenu.Sidebar className="flex flex-col gap-6 w-fit min-w-16 p-3 bg-white border-r border-zinc-200 shadow-sm">
                    <HeadlessMenu.ShortLogo>
                        <div>HC</div>
                    </HeadlessMenu.ShortLogo>
                    <HeadlessMenu.FullLogo>
                        <div>HelloClient</div>
                    </HeadlessMenu.FullLogo>
                    <HeadlessMenu.List className="flex flex-col gap-0.5">
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger as={NavLink} to="/" className={itemControlClass}>
                                <HomeIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Home</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger as={NavLink} to="/about" className={itemControlClass}>
                                <WorldIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>About</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger as={NavLink} to="/contact" className={itemControlClass}>
                                <UserIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Contact</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger className={itemControlClass}>
                                <SettingsSlidersIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Services</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                            <HeadlessMenu.Submenu className={submenuClass}>
                                <HeadlessMenu.Subitem as={NavLink} to="/services" className={subitemClass}>
                                    Services
                                </HeadlessMenu.Subitem>
                            </HeadlessMenu.Submenu>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger as={NavLink} to="/products" className={itemControlClass}>
                                <EnvelopeIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Products</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item className="relative">
                            <HeadlessMenu.Trigger className={itemControlClass}>
                                <SettingsIcon className={itemIconClass} />
                                <HeadlessMenu.Label className={itemLabelClass}>Settings</HeadlessMenu.Label>
                            </HeadlessMenu.Trigger>
                            <HeadlessMenu.Submenu className={submenuClass}>
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
                        <HeadlessMenu.OpenBtn className="group flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
                            <AngleRightIcon className="fill-current transition-transform duration-200 w-[16px] h-[16px] group-data-open:rotate-180" />
                        </HeadlessMenu.OpenBtn>
                    </div>
                </HeadlessMenu.Sidebar>
            </HeadlessMenu>
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
