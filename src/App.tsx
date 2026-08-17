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

const itemControlClass = [
    "flex items-center gap-3",
    "rounded-lg px-3 py-2",
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
    "transition-colors",
    "aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600",
    "group-data-open:bg-blue-50 group-data-open:text-blue-600",

    "data-[viewport=mobile]:flex-col",
    "data-[viewport=mobile]:gap-1",
    "data-[viewport=mobile]:justify-center",
    "data-[viewport=mobile]:items-center",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:rounded-xl",
    "data-[viewport=mobile]:px-1",
    "data-[viewport=mobile]:py-1.5",
    "data-[viewport=mobile]:hover:bg-zinc-100",
].join(" ");

const itemLabelClass = [
    "text-sm font-medium",
    "whitespace-nowrap",
    "data-[viewport=mobile]:text-[11px]",
].join(" ");

const itemIconClass = [
    "fill-current shrink-0",
    "w-[20px] h-[20px]",
].join(" ");

const submenuClass = [
    "flex",

    "data-[orientation=vertical]:flex-col",
    "data-[orientation=vertical]:gap-0.5",
    "data-[orientation=vertical]:mt-1",
    "data-[orientation=vertical]:pl-6",

    "data-[orientation=horizontal]:absolute",
    "data-[orientation=horizontal]:left-full",
    "data-[orientation=horizontal]:top-full",
    "data-[orientation=horizontal]:z-50",
    "data-[orientation=horizontal]:ml-2",
    "data-[orientation=horizontal]:min-w-[12rem]",
    "data-[orientation=horizontal]:rounded-lg",
    "data-[orientation=horizontal]:border",
    "data-[orientation=horizontal]:border-zinc-200",
    "data-[orientation=horizontal]:bg-white",
    "data-[orientation=horizontal]:shadow-lg",
    "data-[orientation=horizontal]:px-4",
    "data-[orientation=horizontal]:py-2",

    "data-[orientation=sheet]:fixed",
    "data-[orientation=sheet]:inset-0",
    "data-[orientation=sheet]:z-50",
    "data-[orientation=sheet]:[&_[data-part=overlay]]:absolute",
    "data-[orientation=sheet]:[&_[data-part=overlay]]:inset-0",
    "data-[orientation=sheet]:[&_[data-part=overlay]]:bg-zinc-900/40",
    "data-[orientation=sheet]:[&_[data-part=panel]]:absolute",
    "data-[orientation=sheet]:[&_[data-part=panel]]:inset-x-0",
    "data-[orientation=sheet]:[&_[data-part=panel]]:bottom-0",
    "data-[orientation=sheet]:[&_[data-part=panel]]:rounded-t-3xl",
    "data-[orientation=sheet]:[&_[data-part=panel]]:bg-white",
    "data-[orientation=sheet]:[&_[data-part=panel]]:px-4",
    "data-[orientation=sheet]:[&_[data-part=panel]]:pt-4",
    "data-[orientation=sheet]:[&_[data-part=panel]]:pb-8",
    "data-[orientation=sheet]:[&_[data-part=panel]]:shadow-[0_-8px_30px_rgb(0_0_0_/_0.12)]",
    "data-[orientation=sheet]:[&_[data-part=header]]:flex",
    "data-[orientation=sheet]:[&_[data-part=header]]:items-center",
    "data-[orientation=sheet]:[&_[data-part=header]]:justify-between",
    "data-[orientation=sheet]:[&_[data-part=header]]:mb-2",
    "data-[orientation=sheet]:[&_[data-part=title]]:text-lg",
    "data-[orientation=sheet]:[&_[data-part=title]]:font-semibold",
    "data-[orientation=sheet]:[&_[data-part=close]]:rounded-lg",
    "data-[orientation=sheet]:[&_[data-part=close]]:p-2",
    "data-[orientation=sheet]:[&_[data-part=close]]:text-zinc-500",
    "data-[orientation=sheet]:[&_[data-part=close]]:hover:bg-zinc-100",
    "data-[orientation=sheet]:[&_[data-part=close]]:hover:text-zinc-900",
    "data-[orientation=sheet]:[&_[data-part=list]]:flex",
    "data-[orientation=sheet]:[&_[data-part=list]]:flex-col",
    "data-[orientation=sheet]:[&_[data-part=list]]:gap-0.5",
].join(" ");

const subitemClass = [
    "block rounded-lg px-3 py-2",
    "hover:bg-zinc-100 hover:text-zinc-900",
    "aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600",
].join(" ");

const layoutClass = "flex flex-start flex-1 min-h-screen";

const contentClass = "flex flex-1 flex-col bg-zinc-50 text-zinc-900 p-8 max-md:pb-28";

const sidebarClass = [
    "group flex flex-col gap-6 w-fit min-w-16 p-3",
    "bg-white border-r border-zinc-200 shadow-sm",
    "data-[viewport=mobile]:fixed",
    "data-[viewport=mobile]:inset-x-0",
    "data-[viewport=mobile]:bottom-0",
    "data-[viewport=mobile]:z-40",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:min-w-0",
    "data-[viewport=mobile]:gap-0",
    "data-[viewport=mobile]:p-2",
    "data-[viewport=mobile]:pb-[max(0.5rem,env(safe-area-inset-bottom))]",
    "data-[viewport=mobile]:border-r-0",
    "data-[viewport=mobile]:border-t",
    "data-[viewport=mobile]:shadow-[0_-4px_16px_rgb(0_0_0_/_0.06)]",
].join(" ");

const logoClass = "px-3 py-2";

const listClass = [
    "flex flex-col gap-0.5",
    "data-[viewport=mobile]:flex-row",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:gap-0",
    "data-[viewport=mobile]:[&>li]:flex-1",
    "data-[viewport=mobile]:[&>li]:min-w-0",
].join(" ");

const itemClass = "relative group";

const openBtnWrapClass = "flex justify-end px-1 group-data-[viewport=mobile]:hidden";

const openBtnClass = [
    "group flex items-center justify-center",
    "rounded-lg p-2",
    "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
].join(" ");

const openBtnIconClass = [
    "fill-current",
    "transition-transform duration-200",
    "w-[16px] h-[16px]",
    "group-data-open:rotate-180",
].join(" ");

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
