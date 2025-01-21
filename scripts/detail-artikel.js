const queryString = location.search;

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')); // Ubah 'productId' menjadi integer

const data = [
  {
    "id": 1,
    "judul": "Judul Artikel 1",
    "deskripsi": "Deskripsi Artikel 1 yang panjang...",
    "gambar": "https://i.pinimg.com/564x/c1/5f/4f/c15f4fbe9fb1c9196ed81a7d77d9a408.jpg",
    "kategori": "Teknologi"
  },
  {
    "id": 2,
    "judul": "Judul Artikel 2",
    "deskripsi": "Deskripsi Artikel 2 yang panjang...",
    "gambar": "https://i.pinimg.com/564x/c1/5f/4f/c15f4fbe9fb1c9196ed81a7d77d9a408.jpg",
    "kategori": "Olahraga"
  },
  {
    "id": 3,
    "judul": "Judul Artikel 2",
    "deskripsi": "Deskripsi Artikel 2 yang panjang...",
    "gambar": "https://i.pinimg.com/564x/c1/5f/4f/c15f4fbe9fb1c9196ed81a7d77d9a408.jpg",
    "kategori": "Olahraga"
  },
  {
    "id": 4,
    "judul": "Judul Artikel 2",
    "deskripsi": "Deskripsi Artikel 2 yang panjang...",
    "gambar": "https://i.pinimg.com/564x/c1/5f/4f/c15f4fbe9fb1c9196ed81a7d77d9a408.jpg",
    "kategori": "Olahraga"
  },
  // ... tambahkan data produk lainnya di sini ...
];

const produkDetail = document.getElementById('produk-detail');

if (productId && data.find(produk => produk.id === productId)) {
  const produk = data.find(produk => produk.id === productId);

  produkDetail.innerHTML = `
    <h2>${produk.judul}</h2>
    <p>${produk.deskripsi}</p>
    <img src="${produk.gambar}" alt="${produk.judul}">
    <p>kategori: ${produk.kategori}</p>
  `;
} else {
  console.error('Data produk tidak ditemukan');
}
