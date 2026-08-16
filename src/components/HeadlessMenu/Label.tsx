import { useMenuContext } from './hooks';
import type { HeadlessMenuLabelProps } from './types';

export default function Label(
    props: HeadlessMenuLabelProps,
) {
    const { children, ...rest } = props;
    const { isSidebarOpen } = useMenuContext();

    if (!isSidebarOpen) {
        return null;
    }

    return (
        <span {...rest}>
            {children}
        </span>
    );
}
