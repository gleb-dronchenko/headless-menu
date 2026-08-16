type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type HeadlessMenuItemProps = {
    as?: React.ElementType;
    label: string;
    icon?: Icon;
    classNames?: {
        item: string;
        link: string;
        icon: string;
        label: string;
        submenuAccordion: string;
        submenuFlyout: string;
    };
    children?: React.ReactNode;
    [key: string]: React.ComponentProps<React.ElementType>;
};

export type HeadlessMenuSubItemProps = {
    as?: React.ElementType;
    label: string;
    classNames?: {
        item?: string;
        link?: string;
        label?: string;
    };
    [key: string]: React.ComponentProps<React.ElementType>;
};


export type HeadlessMenuProps = {
    isSidebarOpened: boolean;
    setIsSidebarOpened: (isSidebarOpened: boolean) => void;
    children: React.ReactNode;
}
