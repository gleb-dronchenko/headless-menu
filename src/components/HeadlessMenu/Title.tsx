import { useItemContext } from './hooks';
import type { HeadlessMenuTitleProps } from './types';

export default function Title(
    props: HeadlessMenuTitleProps,
) {
    const {
        ...rest
    } = props;
    const { label } = useItemContext();

    return (
        <h2 {...rest} data-part="title">
            {label}
        </h2>
    );
}
