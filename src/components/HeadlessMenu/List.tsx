export default function List(
    props: { children: React.ReactNode },
) {
    const { children } = props;
    return (
        <ul>
            {children}
        </ul>
    );
}
