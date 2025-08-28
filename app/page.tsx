"use client";

import { useState } from 'react';

// Main App component
export default function App() {
  // State untuk menyimpan data foto
  // Anda bisa mengganti data ini dengan foto pribadi Anda
  // Cukup letakkan foto di folder `public` dan ubah `src`
  const initialPhotos = [
    { src: 'https://placehold.co/800x600/FFC0CB/542F4B?text=Momen+1', alt: 'Momen Indah Kita', caption: 'Setiap momen bersamamu adalah kenangan yang tak terlupakan.' },
    { src: 'https://placehold.co/600x800/E6E6FA/542F4B?text=Liburan+Kita', alt: 'Liburan di Pantai', caption: 'Gelombang laut dan senyumanmu, kombinasi sempurna.' },
    { src: 'https://placehold.co/800x600/DDA0DD/542F4B?text=Jalan+Sore', alt: 'Jalan-jalan Sore', caption: 'Menikmati sore yang tenang, hanya kita berdua.' },
    { src: 'https://placehold.co/600x800/F0E68C/542F4B?text=Di+Kafe+Favorit', alt: 'Kafe Favorit', caption: 'Tempat di mana cerita kita bermula.' },
    { src: 'https://placehold.co/800x600/FFA07A/542F4B?text=Kenangan+Manis', alt: 'Kenangan Manis', caption: 'Setiap foto memiliki ceritanya sendiri, dan ini adalah salah satu favoritku.' },
    { src: 'https://placehold.co/600x800/87CEEB/542F4B?text=Hari+Yang+Ceria', alt: 'Hari Ceria Bersamamu', caption: 'Tawamu adalah musik terindah yang pernah kudengar.' },
    { src: 'https://placehold.co/800x600/FFE4E1/542F4B?text=Kita+Selamanya', alt: 'Selalu Bersama', caption: 'Bersamamu, aku merasa di rumah.' },
    { src: 'https://placehold.co/600x800/F5DEB3/542F4B?text=Ulang+Tahun', alt: 'Kejutan Ulang Tahun', caption: 'Terima kasih untuk kejutan yang manis.' },
  ];

  // State untuk melacak foto yang sedang dipilih (untuk modal)
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Fungsi untuk menampilkan modal foto
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="bg-rose-50 min-h-screen font-sans text-stone-800 antialiased relative overflow-hidden">
      {/* Header Utama */}
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-pink-700 tracking-wide leading-tight animate-fade-in-down">
          Album Kenangan Kita
        </h1>
        <p className="mt-4 text-md sm:text-lg text-pink-500 italic animate-fade-in-up">
          Kumpulan setiap momen indah dan romantis
        </p>
      </header>

      {/* Grid Foto */}
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {initialPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handlePhotoClick(photo)}
            >
              {/* Gambar utama dengan efek transisi */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80 aspect-video md:aspect-[3/4]"
              />
              {/* Overlay untuk teks saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-light leading-tight">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal untuk tampilan foto lebih besar */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-full lg:max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol tutup modal menggunakan SVG inline */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Gambar besar di dalam modal */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto object-contain rounded-xl shadow-2xl animate-zoom-in max-h-[80vh]"
            />

            {/* Keterangan foto */}
            <p className="mt-4 text-white text-center text-sm md:text-lg font-light italic bg-black/50 rounded-xl p-3 max-w-full">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-pink-600 font-light">
        <p>&copy; {new Date().getFullYear()} Album Kita. Dibuat dengan cinta.</p>
      </footer>
    </div>
  );
}