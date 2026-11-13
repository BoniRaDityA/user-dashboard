# User Dashboard

## Fitur

- Daftar pengguna dalam bentuk grid card
- Pencarian pengguna berdasarkan nama atau email secara realtime
- Detail pengguna dalam modal (kontak, alamat, dan perusahaan)
- Modal bisa ditutup dengan tombol Tutup, klik di luar modal, atau tombol Esc
- State loading saat data dimuat
- Pesan error yang ramah beserta tombol "Coba Lagi" jika API gagal
- Tampilan responsif (mobile dan desktop)

## Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

## Struktur Folder

```
src/
├── components/   # Komponen UI (SearchBar, UserCard, UserList, UserModal, Loading, ErrorMessage)
├── hooks/        # Custom hook (useUsers, useDebounce)
├── services/     # Pemanggilan API (api.js)
├── App.jsx
└── main.jsx
```

## Jawaban Pertanyaan

### 1. State Management & Lifecycle

Data diambil di custom hook useUsers dengan fetch di dalam useEffect. Hook ini menyimpan tiga state: users, loading, dan error. App.jsx memakai tiga nilai tersebut untuk menampilkan halaman.
Mencegah infinite loop dengan memanggil setState. Mencegah memory leak menggunakan AbortController.

### 2. Struktur Folder

- `components/` hanya berisi tampilan saja. Setiap komponen mempunyai satu tugas, misalnya `UserCard` hanya menampilkan satu user, `UserList` mengatur grid, dan `UserModal` menampilkan detail.
- `hooks/` berisi logika yang terpisah dari tampilan, seperti `useUsers` (fetching, loading, error) dan `useDebounce` (menunda nilai input).
- `services/` berisi pemanggilan API. Jika URL atau cara fetch berubah, cukup mengubah satu file tanpa menyentuh komponen.

### 3. Optimasi Kinerja (10.000 data)

Jika API mengembalikan 10.000 user dan pengetikan di kolom pencarian jadi lag, beberapa pendekatan yang dipakai:

1. **Debounce input.** Proses filter berjalan setelah pengguna berhenti mengetik, tidak di setiap ketukan tombol.
2. **`useMemo`** untuk hasil filter, supaya tidak dihitung ulang jika datanya tidak berubah.
3. **`React.memo`** pada `UserCard`, supaya card yang datanya tidak berubah tidak ikut dirender ulang.
4. **Virtualisasi list.** Hanya item yang terlihat di layar yang dirender.
5. **Pagination.** Untuk data sebesar itu, server lebih baik yang memfilter dan mengirim data per halaman.
