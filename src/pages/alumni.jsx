import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '../layouts/MainLayout';
import Sampul from '../assets/sampul.jpg'; // background hero sama dengan halaman lain

const Alumni = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Sampul})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-white text-center pt-8 px-4">
          <h1 className="font-poppins text-3xl md:text-6xl mb-4 font-bold leading-tight animate-fadeInLeft">
            Form Alumni
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp">
            Silakan lengkapi formulir berikut untuk mengisi data alumni SMK Muhammadiyah Sumowono.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="w-full rounded-lg overflow-hidden shadow-xl" data-aos="zoom-in">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfWlkEp5QyIfUcZabyvinH4xv-bA6pIC997tY319fl1PpKUTA/viewform?embedded=true"
              width="100%"
              height="3098"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[3100px] border-none"
              title="Formulir Alumni"
            >
              Memuat…
            </iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Alumni;
