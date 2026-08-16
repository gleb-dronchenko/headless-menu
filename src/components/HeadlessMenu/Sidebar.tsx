export default function Sidebar(
    props: { children: React.ReactNode },
) {
    const {
        children,
    } = props;

    return (
        <div {...props}>
            {children}
        </div>
    );
}
