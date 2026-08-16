import HeadlessMenu from "./components/HeadlessMenu/HeadlessMenu";
import HomeIcon from "./assets/icons/home.svg";
import UserIcon from "./assets/icons/user.svg";
import WorldIcon from "./assets/icons/world.svg";
import SettingsIcon from "./assets/icons/settings.svg";
import SettingsSlidersIcon from "./assets/icons/settings-sliders.svg";
import EnvelopeIcon from "./assets/icons/envelope.svg";
import { Routes, Route } from "react-router-dom";

const menuItemClassNames = {
    item: "relative",
    link: "flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors",
    icon: "fill-current shrink-0 w-[20px] h-[20px]",
    label: "text-sm font-medium whitespace-nowrap",
};

function App() {
    return (
        <div className="flex flex-start flex-1 min-h-screen">
            <div className="flex flex-col gap-6 w-fit min-w-16 p-3 bg-white border-r border-zinc-200 shadow-sm">
                <HeadlessMenu>
                    <HeadlessMenu.Sidebar>
                        <HeadlessMenu.ShortLogo>
                            <div>HC</div>
                        </HeadlessMenu.ShortLogo>
                        <HeadlessMenu.FullLogo>
                            <div>HelloClient</div>
                        </HeadlessMenu.FullLogo>
                        <HeadlessMenu.List>
                            <HeadlessMenu.Item label="Home" href="/" icon={HomeIcon} classNames={menuItemClassNames}/>
                            <HeadlessMenu.Item label="About" href="/about" icon={WorldIcon} classNames={menuItemClassNames}/>
                            <HeadlessMenu.Item label="Contact" href="/contact" icon={UserIcon} classNames={menuItemClassNames}/>
                            <HeadlessMenu.Item label="Services" href="/services" icon={SettingsSlidersIcon} classNames={menuItemClassNames}>
                                <HeadlessMenu.Subitem label="Services" href="/services" classNames={{
                                    item: "hover:bg-zinc-100 hover:text-zinc-900"
                                }}/>
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item label="Products" href="/products" icon={EnvelopeIcon} classNames={menuItemClassNames}/>
                            <HeadlessMenu.Item label="Settings" href="/settings" icon={SettingsIcon} classNames={menuItemClassNames}>
                                <HeadlessMenu.Subitem label="Profile" href="/profile" classNames={{
                                    item: "hover:bg-zinc-100 hover:text-zinc-900"
                                }}/>
                                <HeadlessMenu.Subitem label="Security" href="/security" classNames={{
                                    item: "hover:bg-zinc-100 hover:text-zinc-900"
                                }}/>
                            </HeadlessMenu.Item>
                        </HeadlessMenu.List>
                        <HeadlessMenu.OpenBtn 
                            classNames={{
                                container: "flex justify-end px-1",
                                button: "flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
                                icon: "fill-current transition-transform duration-200 w-[16px] h-[16px]",
                                iconOpened: "rotate-180",
                            }}
                        />
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
