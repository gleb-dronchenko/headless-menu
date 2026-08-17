import { useItemContext } from './hooks';
import type { HeadlessMenuOverlayProps } from './types';

export default function Overlay(
    props: HeadlessMenuOverlayProps,
) {
    const { closeSubmenu } = useItemContext();

    return (
        <div
            {...props}
            data-part="overlay"
            onClick={closeSubmenu}
        />
    );
}
