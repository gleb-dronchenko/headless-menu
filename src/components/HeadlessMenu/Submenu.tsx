import { useItemContext } from './hooks';
import type { HeadlessMenuSubmenuProps } from './types';

export default function Submenu(
    props: HeadlessMenuSubmenuProps,
) {
    const {
        className,
        children,
    } = props;
    const { isSubmenuOpen } = useItemContext();

    if (!isSubmenuOpen) {
        return null;
    }

    return (
        <ul className={className}>
            {children}
        </ul>
    );
}
