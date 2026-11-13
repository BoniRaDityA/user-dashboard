import { useState, useEffect, useCallback } from 'react';
import { fetchUsers } from '../services/api';

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        
        async function loadUsers() {
            try {
                setLoading(true);
                const data = await fetchUsers(controller.signal);
                setUsers(data);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
         }
            loadUsers();
            return () => controller.abort();
            }, [retryCount]);

    const retry = useCallback(() => {
        setRetryCount(prevCount => prevCount + 1);
    }, []);
    return { users, loading, error, retry };
}