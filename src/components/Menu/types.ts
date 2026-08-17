import type { ComponentPropsWithoutRef, ElementType, MouseEvent, ReactNode } from 'react';

export type MenuProps = {
    // внешний стейт
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
    // позволяет переопределить брейкпоинт мобильной версии извне
    mobileQuery?: string;
    children: ReactNode;
};

export type MenuItemProps = {
    className?: string;
    children?: ReactNode;
};

export type MenuTriggerProps = {
    /* для рендера внешнего компонента (например NavLink из react-router-dom)
       и передачи его props через to, href и т.д. */
    asComponent?: ElementType;
    to?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    //исключаем onClick из ComponentPropsWithoutRef<'a'>

} & Omit<ComponentPropsWithoutRef<'a'>, 'onClick'>;

export type MenuSubItemProps = {
    /* меню отдает рендер ссылок наружу и не зависит от роутера.
       props ссылки (to, href и т.д.) прокидываются в asComponent */
    asComponent?: ElementType;
    to?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    //исключаем onClick из ComponentPropsWithoutRef<'a'>
} & Omit<ComponentPropsWithoutRef<'a'>, 'onClick'>;

export type MenuSubmenuProps = {
    className?: string;
    children?: ReactNode;
    overlay?: ReactNode;
    title?: ReactNode;
    close?: ReactNode;
};

export type MenuOverlayProps = {
    className?: string;
};

export type MenuTitleProps = {
    className?: string;
};

export type MenuCloseProps = ComponentPropsWithoutRef<'button'>;

export type MenuLabelProps = {
    className?: string;
    children?: ReactNode;
};

export type MenuToggleProps = {
    className?: string;
    children?: ReactNode;
};

export type MenuSidebarProps = {
    className?: string;
    children?: ReactNode;
};

export type MenuListProps = {
    className?: string;
    children?: ReactNode;
};

export type MenuLogoProps = {
    children: ReactNode;
};

export type MenuContextValue = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    isMobile: boolean;
};

export type ItemContextValue = {
    /* стейт живет внутри конкретного Item, потому что отвечает только
       за открытие его подменю */
    isSubmenuOpen: boolean;
    toggleSubmenu: () => void;
    closeSubmenu: () => void;
    /* сохраняем label, чтобы мобильное подменю могло
       переиспользовать заголовок пункта */
    label: ReactNode;
    setLabel: (label: ReactNode) => void;
};
