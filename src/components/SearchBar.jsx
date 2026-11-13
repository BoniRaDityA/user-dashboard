export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Cari pengguna..."
            className="border border-gray-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}