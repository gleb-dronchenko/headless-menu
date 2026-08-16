import type { HeadlessMenuSidebarProps } from './types';

export default function Sidebar(
    props: HeadlessMenuSidebarProps,
) {
    const {
        children,
        ...rest
    } = props;

    return (
        <div {...rest}>
            {children}
        </div>
    );
}
