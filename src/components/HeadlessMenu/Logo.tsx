import { useMenuContext } from './hooks';
import type { HeadlessMenuLogoProps } from './types';

export function ShortLogo(
    { children }: HeadlessMenuLogoProps,
) {
    const { isSidebarOpen } = useMenuContext();
    
    if (isSidebarOpen) {
        return null;
    }

    return (
        <>{ children }</>
    );
}

export function FullLogo(
    { children }: HeadlessMenuLogoProps,
) {
    const { isSidebarOpen } = useMenuContext();
    
    if (!isSidebarOpen) {
        return null;
    }

    return (
        <>{ children }</>
    );
}
