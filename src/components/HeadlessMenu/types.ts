import type { ElementType, ReactNode } from 'react';

export type HeadlessMenuProps = {
    isSidebarOpened: boolean;
    setIsSidebarOpened: (isSidebarOpened: boolean) => void;
    // matchMedia-запрос для определения вьюпорта
    mobileQuery?: string;
    children: ReactNode;
};

export type HeadlessMenuItemProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuTriggerProps = {
    asComponent?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type HeadlessMenuSubItemProps = {
    asComponent?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type HeadlessMenuSubmenuProps = {
    className?: string;
    children?: ReactNode;
    overlay?: ReactNode;
    title?: ReactNode;
    close?: ReactNode;
};

export type HeadlessMenuOverlayProps = {
    className?: string;
};

export type HeadlessMenuTitleProps = {
    className?: string;
};

export type HeadlessMenuCloseProps = {
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export type HeadlessMenuLabelProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuOpenBtnProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuSidebarProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuListProps = {
    className?: string;
    children?: ReactNode;
};

export type HeadlessMenuLogoProps = {
    children: ReactNode;
};

export type MenuContextValue = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    isMobile: boolean;
};

export type ItemContextValue = {
    isSubmenuOpen: boolean;
    toggleSubmenu: () => void;
    closeSubmenu: () => void;
    // совпадает с children. на данный момент исключает лишние проверки типа при сохранении в контекст.
    // дополнительно позволяет расширить label
    label: ReactNode;
    setLabel: (label: ReactNode) => void;
};
