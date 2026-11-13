import { useEffect } from 'react';

export default function UserModal({ user, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    if (!user) return null
    const { address, company } = user

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
            <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}
                role="dialog" aria-modal="true">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.username}</p>
                        </div>
                        <button onClick={onClose} className="ml-4 rounded bg-red-500 px-2 py-1 text-white hover:bg-gray-300"> X </button>
                    </div>

                    <d1 className="mt-6 space-y-8">
                        <Section title="Informasi Kontak">
                            <Item label="Email" value={user.email} />
                            <Item label="Telepon" value={user.phone} />
                            <Item label="Website" value={user.website} />
                        </Section>
                        <Section title="Alamat">
                            <Item label="Jalan" value={`${address.street}, ${address.suite}`} />
                            <Item label="Kota" value={address.city} />
                            <Item label="Kode Pos" value={address.zipcode} />
                        </Section>
                        <Section title="Perusahaan">
                            <Item label="Nama" value={company.name} />
                            <Item label="Slogan" value={company.catchPhrase} />
                            <Item label="Bidang" value={company.bs} />
                        </Section>
                    </d1>
                </div>
            </div>
    )
}

const Section = ({ title, children }) => (
    <div>
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        <div className="mt-1 space-y-1">{children}</div>
    </div>
)

const Item = ({ label, value }) => (
    <div className="flex items-center gap-2">
        <dt className="font-medium text-gray-700">{label}:</dt>
        <dd className="text-gray-600">{value}</dd>
    </div>
)