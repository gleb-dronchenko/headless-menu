import { useItemContext, useMenuContext } from './hooks';
import type { HeadlessMenuSubmenuProps } from './types';

export default function Submenu(
    props: HeadlessMenuSubmenuProps,
) {
    const { children, ...rest } = props;
    const { isSubmenuOpen } = useItemContext();
    const { isSidebarOpen } = useMenuContext();

    if (!isSubmenuOpen) {
        return null;
    }

    return (
        <ul
            {...rest}
            data-open=""
            data-orientation={isSidebarOpen ? 'vertical' : 'horizontal'}
        >
            {children}
        </ul>
    );
}
