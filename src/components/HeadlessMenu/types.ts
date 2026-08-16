import type { ElementType, ReactNode } from 'react';

export type HeadlessMenuProps = {
    isSidebarOpened: boolean;
    setIsSidebarOpened: (isSidebarOpened: boolean) => void;
    children: ReactNode;
};

export type HeadlessMenuItemProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuTriggerProps = {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type HeadlessMenuSubItemProps = {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type HeadlessMenuSubmenuProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuOpenBtnProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuSidebarProps = { 
    children: ReactNode,
};

export type HeadlessMenuListProps = {
    children: ReactNode;
};

export type HeadlessMenuLogoProps = {
    children: ReactNode;
};

export type MenuContextValue = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
};

export type ItemContextValue = {
    isSubmenuOpen: boolean;
    toggleSubmenu: () => void;
    closeSubmenu: () => void;
};
