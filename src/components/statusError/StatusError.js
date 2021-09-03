export default function StatusError({ message }) {
    return (
        <div role="alert">
            <p>Oops, {message}</p>
        </div>
    );
}
