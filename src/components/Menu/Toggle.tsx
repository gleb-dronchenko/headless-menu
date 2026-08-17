import { useMenuContext } from './hooks';
import type { MenuToggleProps } from './types';

export default function Toggle(
    props: MenuToggleProps,
) {
    const {
        className,
        children,
    } = props;

    const {
        isSidebarOpen,
        setIsSidebarOpen,
        isMobile,
    } = useMenuContext();

    if (isMobile) {
        return null;
    }

    return (
        <button
            type="button"
            className={className}
            data-open={isSidebarOpen ? '' : undefined}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            {children}
        </button>
    );
}
