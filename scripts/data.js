const data = [
    {
        "id": 1,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id": 2,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    },
    {
        "id": 3,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id": 4,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    },
    {
        "id":5,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id":6,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    },
    {
        "id": 7,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id": 8,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    },
    {
        "id": 9,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id": 10,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    },
    {
        "id": 11,
        "judul": "Judul Artikel 1",
        "deskripsi": "Deskripsi Artikel 1 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Teknologi"
    },
    {
        "id": 12,
        "judul": "Judul Artikel 2",
        "deskripsi": "Deskripsi Artikel 2 yang panjang...",
        "gambar": "../assets/images/proyekImg.png",
        "kategori": "Olahraga"
    }
];

const kategoriFilter = document.getElementById('kategoriFilter');
const artikelList = document.getElementById('artikelList');

kategoriFilter.addEventListener('change', () => {
    const selectedKategori = kategoriFilter.value;
    const filteredData = data.filter(artikel => artikel.kategori === selectedKategori || selectedKategori === '');

    artikelList.innerHTML = '';

    filteredData.forEach(artikel => {
        const artikelElement = `
            <div class="artikel">
                <img src="${artikel.gambar}" alt="${artikel.judul}" class="gambar">
                <a href="./detailPages.html?id=${artikel.id}" class="artikel-info">
                    <h2 class="judul">${artikel.judul}</h2>
                    <p class="deskripsi">${artikel.deskripsi.substring(0, 100)}...</p>
                </a>
            </div>
        `;

        artikelList.innerHTML += artikelElement;
    });
});

// Load all articles initially
kategoriFilter.dispatchEvent(new Event('change'));
