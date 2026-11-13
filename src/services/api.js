const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(signal) {
    const response = await fetch(`${BASE_URL}/users`, { signal });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}