import { createContext } from 'react';

type MenuContextValue = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
};

export const MenuContext = createContext<MenuContextValue | null>(null);
