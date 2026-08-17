// Классы вынесены из App.tsx для лучшей читабельности кода

export const itemControlClass = [
    "flex items-center gap-3",
    "rounded-lg px-3 py-2",
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
    "transition-colors",
    "aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600",
    "group-data-open:bg-blue-50 group-data-open:text-blue-600",

    "data-[viewport=mobile]:flex-col",
    "data-[viewport=mobile]:gap-1",
    "data-[viewport=mobile]:justify-center",
    "data-[viewport=mobile]:items-center",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:rounded-xl",
    "data-[viewport=mobile]:px-1",
    "data-[viewport=mobile]:py-1.5",
    "data-[viewport=mobile]:hover:bg-zinc-100",
].join(" ");

export const itemLabelClass = [
    "text-sm font-medium",
    "whitespace-nowrap",
    "data-[viewport=mobile]:text-[11px]",
].join(" ");

export const itemIconClass = [
    "fill-current shrink-0",
    "w-[20px] h-[20px]",
].join(" ");

export const submenuClass = [
    "flex",

    "data-[variant=inline]:flex-col",
    "data-[variant=inline]:gap-0.5",
    "data-[variant=inline]:mt-1",
    "data-[variant=inline]:pl-6",

    "data-[variant=flyout]:absolute",
    "data-[variant=flyout]:left-full",
    "data-[variant=flyout]:top-full",
    "data-[variant=flyout]:z-50",
    "data-[variant=flyout]:ml-2",
    "data-[variant=flyout]:flex-col",
    "data-[variant=flyout]:min-w-[12rem]",
    "data-[variant=flyout]:rounded-lg",
    "data-[variant=flyout]:border",
    "data-[variant=flyout]:border-zinc-200",
    "data-[variant=flyout]:bg-white",
    "data-[variant=flyout]:shadow-lg",
    "data-[variant=flyout]:px-4",
    "data-[variant=flyout]:py-2",

    "data-[variant=sheet]:fixed",
    "data-[variant=sheet]:inset-0",
    "data-[variant=sheet]:z-50",
    "data-[variant=sheet]:[&_[data-part=overlay]]:absolute",
    "data-[variant=sheet]:[&_[data-part=overlay]]:inset-0",
    "data-[variant=sheet]:[&_[data-part=overlay]]:bg-zinc-900/40",
    "data-[variant=sheet]:[&_[data-part=panel]]:absolute",
    "data-[variant=sheet]:[&_[data-part=panel]]:inset-x-0",
    "data-[variant=sheet]:[&_[data-part=panel]]:bottom-0",
    "data-[variant=sheet]:[&_[data-part=panel]]:rounded-t-3xl",
    "data-[variant=sheet]:[&_[data-part=panel]]:bg-white",
    "data-[variant=sheet]:[&_[data-part=panel]]:px-4",
    "data-[variant=sheet]:[&_[data-part=panel]]:pt-4",
    "data-[variant=sheet]:[&_[data-part=panel]]:pb-8",
    "data-[variant=sheet]:[&_[data-part=panel]]:shadow-[0_-8px_30px_rgb(0_0_0_/_0.12)]",
    "data-[variant=sheet]:[&_[data-part=header]]:flex",
    "data-[variant=sheet]:[&_[data-part=header]]:items-center",
    "data-[variant=sheet]:[&_[data-part=header]]:justify-between",
    "data-[variant=sheet]:[&_[data-part=header]]:mb-2",
    "data-[variant=sheet]:[&_[data-part=title]]:text-lg",
    "data-[variant=sheet]:[&_[data-part=title]]:font-semibold",
    "data-[variant=sheet]:[&_[data-part=close]]:rounded-lg",
    "data-[variant=sheet]:[&_[data-part=close]]:p-2",
    "data-[variant=sheet]:[&_[data-part=close]]:text-zinc-500",
    "data-[variant=sheet]:[&_[data-part=close]]:hover:bg-zinc-100",
    "data-[variant=sheet]:[&_[data-part=close]]:hover:text-zinc-900",
    "data-[variant=sheet]:[&_[data-part=list]]:flex",
    "data-[variant=sheet]:[&_[data-part=list]]:flex-col",
    "data-[variant=sheet]:[&_[data-part=list]]:gap-0.5",
].join(" ");

export const subitemClass = [
    "block rounded-lg px-3 py-2",
    "hover:bg-zinc-100 hover:text-zinc-900",
    "aria-[current=page]:bg-blue-50 aria-[current=page]:text-blue-600",
].join(" ");

export const layoutClass = "flex flex-start flex-1 min-h-screen";

export const contentClass = "flex flex-1 flex-col bg-zinc-50 text-zinc-900 p-8 max-md:pb-28";

export const sidebarClass = [
    "group flex flex-col gap-6 w-fit min-w-16 p-3",
    "bg-white border-r border-zinc-200 shadow-sm",
    "data-[viewport=mobile]:fixed",
    "data-[viewport=mobile]:inset-x-0",
    "data-[viewport=mobile]:bottom-0",
    "data-[viewport=mobile]:z-40",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:min-w-0",
    "data-[viewport=mobile]:gap-0",
    "data-[viewport=mobile]:p-2",
    "data-[viewport=mobile]:pb-[max(0.5rem,env(safe-area-inset-bottom))]",
    "data-[viewport=mobile]:border-r-0",
    "data-[viewport=mobile]:border-t",
    "data-[viewport=mobile]:shadow-[0_-4px_16px_rgb(0_0_0_/_0.06)]",
].join(" ");

export const logoClass = "px-3 py-2";

export const listClass = [
    "flex flex-col gap-0.5",
    "data-[viewport=mobile]:flex-row",
    "data-[viewport=mobile]:w-full",
    "data-[viewport=mobile]:gap-0",
    "data-[viewport=mobile]:[&>li]:flex-1",
    "data-[viewport=mobile]:[&>li]:min-w-0",
].join(" ");

export const itemClass = "relative group";

export const toggleWrapClass = "flex justify-end px-1 group-data-[viewport=mobile]:hidden";

export const toggleClass = [
    "group flex items-center justify-center",
    "rounded-lg p-2",
    "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
].join(" ");

export const toggleIconClass = [
    "fill-current",
    "transition-transform duration-200",
    "w-[16px] h-[16px]",
    "group-data-open:rotate-180",
].join(" ");
