import type { HeadlessMenuItemProps } from './types';
import { useMenuContext } from './hooks';

export default function Item(
    props: HeadlessMenuItemProps,
) {
    const {
        label,
        icon,
        href,
        classNames = {
            item: '',
            link: '',
            icon: '',
            label: '',
        },
    } = props;

    const { isSidebarOpen } = useMenuContext();

    const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null = icon ?? null;
    
    return (
        <li className={classNames?.item ?? ''}>
            <a 
                href={href} 
                className={classNames?.link}
                onClick={() => {}}
            >
                {Icon ? <Icon className={classNames.icon}/> : null}
                {
                    isSidebarOpen ? 
                        <span className={classNames.label}>{label}</span>:
                        null
                }
            </a>
        </li>
    );
}
