import { useEffect, useState } from 'react';

// `md` (768px): ниже — мобильный режим.
export const DEFAULT_MOBILE_QUERY = '(max-width: 767px)';

function getIsMobile(query: string) {
    // проверяем наличие window в браузере
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia(query).matches;
}

export function useViewportController(query = DEFAULT_MOBILE_QUERY) {
    const [isMobile, setIsMobile] = useState(() => getIsMobile(query));

    useEffect(() => {
        const onChangeHandler = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // устанавливаем начальное значение
        const mediaQueryList = window.matchMedia(query);
        setIsMobile(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', onChangeHandler);

        return () => {
            mediaQueryList.removeEventListener('change', onChangeHandler);
        };
    }, [query]);

    return { isMobile };
}
