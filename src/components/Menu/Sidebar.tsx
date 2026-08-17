import { useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { MenuSidebarProps } from './types';

export default function Sidebar(
    props: MenuSidebarProps,
) {
    const {
        children,
        ...rest
    } = props;
    const { isMobile } = useMenuContext();

    return (
        <div
            {...rest}
            data-viewport={getViewport(isMobile)}
        >
            {children}
        </div>
    );
}
