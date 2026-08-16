export default function Sidebar(
    props: { children: React.ReactNode },
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
