import { useMenuContext } from './hooks';

export function ShortLogo(
    { children }: { children: React.ReactNode },
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
    { children }: { children: React.ReactNode },
) {
    const { isSidebarOpen } = useMenuContext();
    
    if (!isSidebarOpen) {
        return null;
    }

    return (
        <>{ children }</>
    );
}