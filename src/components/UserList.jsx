import UserCard from './UserCard'

export default function UserList({ users, onSelect }) {
  if (users.length === 0) {
    return <p className="py-10 text-center text-gray-500">Tidak ada pengguna yang cocok.</p>
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((u) => (
        <UserCard key={u.id} user={u} onClick={onSelect} />
      ))}
    </div>
  )
}