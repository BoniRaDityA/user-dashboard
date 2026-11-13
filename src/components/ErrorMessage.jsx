export default function ErrorMessage({ message, onRetry }) {
    return (
        <div className="mx-auto max-w-md rounded-lg bg-red-100 p-4 text-center">
            <p className="font-semibold text-red-700">Ada masalah</p>
            <p className="mt-2 text-red-600">{message}</p>
            <button onClick={onRetry} className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Coba Lagi</button>
        </div>
    );
}