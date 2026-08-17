import { useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { HeadlessMenuSidebarProps } from './types';

export default function Sidebar(
    props: HeadlessMenuSidebarProps,
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
