import type { HeadlessMenuListProps } from './types';

export default function List(
    props: HeadlessMenuListProps,
) {
    const { children } = props;
    return (
        <ul>
            {children}
        </ul>
    );
}
