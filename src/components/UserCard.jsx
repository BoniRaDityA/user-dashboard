import { memo } from 'react'

function UserCard({ user, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(user)}
      className="flex w-full min-w-0 flex-col rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="font-semibold text-gray-900">{user.name}</h3>
      <p className="mt-1 break-all text-sm text-gray-500">{user.email}</p>
      <p className="mt-1 text-sm text-gray-400">{user.company.name}</p>
    </button>
  )
}

export default memo(UserCard)