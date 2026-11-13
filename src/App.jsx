import { useMemo, useState } from 'react'
import useUsers from './hooks/useUsers'
import useDebounce from './hooks/useDebounce'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import UserModal from './components/UserModal'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'

export default function App() {
    const { users, loading, error, retry } = useUsers()
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(null)
    const debouncedQuery = useDebounce(query, 300)

    const filtered = useMemo(() => {
        const q = debouncedQuery.trim().toLowerCase()
        if (!q) return users
        return users.filter(
          (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
        )
    }, [users, debouncedQuery])

  return (
      <div className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
              
              {loading && <Loading />}
              {error && <ErrorMessage message={error} onRetry={retry} />}
              {!loading && !error && (
                <>
                  <div className="mb-6">
                    <SearchBar value={query} onChange={setQuery} />
                    <p className="mt-2 text-sm text-gray-500">{filtered.length} Pengguna ditemukan</p>
                  </div>
                  <UserList users={filtered} onSelect={setSelected} />
                </>
              )}
          </div>
          <UserModal user={selected} onClose={() => setSelected(null)} />
      </div>
    )
}