import Navbar from '../components/Navbar';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MainLayout = ({ children }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-950 text-white text-sm relative z-[60]">
        <div className="max-w-screen-xl mx-auto py-3 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Kiri: Info Kontak */}
          <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope"></i>
              <span>smkmoe.bisa@yahoo.co.id</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt"></i>
              <span>(0298)713567</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jl. KH Ahmad Dahlan No. 8–9, Sumowono</span>
            </div>
          </div>

          {/* Kanan: Sosial Media */}
          <div className="flex items-center gap-3 text-base relative z-10">
            <a
              href="https://www.instagram.com/smkmuno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@smkmuno4168"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.tiktok.com/@smkmuno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <Navbar />
      <main className="w-full overflow-x-hidden overflow-y-hidden">{children}</main>

      <footer className="bg-blue-950 text-white pt-16">
        <div className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          {/* Kolom 1 - Logo & Deskripsi */}
          <div>
            <img src={Logo} alt="Logo" className="w-16 mb-6" />
            <p className="text-sm leading-relaxed">
              SMK Muhammadiyah Sumowono hadir untuk memenuhi kebutuhan pendidikan di Indonesia.
              Pendidikan adalah kunci untuk membangun manusia demi menciptakan peradaban yang lebih
              baik.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/smkmuno"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/@smkmuno4168"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-red-400 transition-colors duration-300"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a
                href="https://www.tiktok.com/@smkmuno"
                target="_blank"
                aria-label="TikTok"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>

          {/* Kolom 3 - Tautan Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 relative">
              Tentang
              <span className="block w-10 h-[3px] bg-white mt-2 rounded"></span>
            </h3>
            <ul className="text-sm space-y-3">
              <li>
                <Link to="/tentang" className="transition-colors duration-300 hover:text-blue-400">
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  to="/visi-misi"
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link
                  to="/struktur-organisasi"
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link to="/guru" className="transition-colors duration-300 hover:text-blue-400">
                  Guru
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4 - Program */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 relative">
              Program
              <span className="block w-10 h-[3px] bg-white mt-2 rounded"></span>
            </h3>
            <ul className="text-sm space-y-3">
              <li>
                <Link to="/tsm" className="transition-colors duration-300 hover:text-blue-400">
                  Teknik Sepeda Motor
                </Link>
              </li>
              <li>
                <Link to="/dpb" className="transition-colors duration-300 hover:text-blue-400">
                  Desain Produk dan Busana
                </Link>
              </li>
              <li>
                <Link
                  to="/ekstrakurikuler"
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  Ekstrakurikuler
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2 - Alamat */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 relative">
              Alamat
              <span className="block w-10 h-[3px] bg-white mt-2 rounded"></span>
            </h3>
            <p className="text-sm mb-3 flex items-start">
              <i className="fas fa-map-marker-alt mr-3 mt-1" />
              JL. KH Ahmad Dahlan No. 8–9, Sumowono, Kabupaten Semarang, Jawa Tengah 50662
            </p>
            <p className="text-sm mb-3 flex items-start">
              <i className="fas fa-phone mr-3 mt-1" />
              (0298)713567
            </p>
            <p className="text-sm flex items-start">
              <i className="fas fa-envelope mr-3 mt-1" />
              smkmoe.bisa@yahoo.co.id
            </p>
          </div>
        </div>

        <div className="w-full border-t border-white/20" />

        <div className="bg-[#0c1a33] text-center text-sm py-6 px-6 md:px-12 lg:px-20">
          <p className="tracking-wide">
            © {new Date().getFullYear()} SMK Muhammadiyah Sumowono. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Tombol WhatsApp - kiri bawah */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 left-6 bg-green-500 text-white w-[60px] h-[60px] rounded-full shadow-xl z-50 hover:bg-green-600 transition flex items-center justify-center"
        aria-label="Buka Chat WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </button>

      {/* Popup WhatsApp */}
      {showChat && (
        <div className="fixed bottom-24 left-6 w-[340px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i>
              <span className="font-semibold">WhatsApp</span>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-white text-xl hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          {/* Isi */}
          <div className="p-4 bg-[#f7f7f7]">
            <div className="bg-white rounded-full px-4 py-2 shadow text-gray-800 mb-4 w-fit">
              Informasi Sekolah Lebih Lanjut?
            </div>
            <a
              href="https://wa.me/6281575161608?text=Halo%20saya%20ingin%20tanya%20tentang%20pendaftaran%20di%20SMK%20Muhammadiyah%20Sumowono"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 rounded-full text-center relative"
            >
              Chat Sekarang
              <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
