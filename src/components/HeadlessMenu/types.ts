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
};
