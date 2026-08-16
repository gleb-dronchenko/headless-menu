import type { HeadlessMenuListProps } from './types';

export default function List(
    props: HeadlessMenuListProps,
) {
    const {
        children,
        ...rest
    } = props;

    return (
        <ul {...rest}>
            {children}
        </ul>
    );
}
