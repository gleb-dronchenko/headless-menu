type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type HeadlessMenuItemProps = {
    label: string;
    icon?: Icon;
    href?: string;
    classNames?: {
        item: string;
        link: string;
        icon: string;
        label: string;
    };
    children?: React.ReactNode;
};

export type HeadlessMenuSubItemProps = {
    label: string;
    href?: string;
    classNames?: {
        item?: string;
        link?: string;
        label?: string;
    };
};
