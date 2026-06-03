import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Anasayfa.css';
import NewsCard from '../common/NewsCard';
import PopularList from '../common/PopularList';
import SectionHeading from '../common/SectionHeading';

import heroPort from '../assets/generated/home-hero-port.png';
import economyImage from '../assets/generated/news-economy.png';
import entertainmentImage from '../assets/generated/news-entertainment.png';
import worldImage from '../assets/generated/news-world.png';
import sportsImage from '../assets/generated/news-sports.png';
import educationImage from '../assets/generated/news-education.png';
import energyImage from '../assets/generated/news-energy.png';

const latestNews = [
  {
    category: 'Ekonomi',
    title: 'Küresel piyasalarda yeni hafta beklentisi: Gözler Fed kararında',
    summary:
      'Yeni haftanın başlangıcında yatırımcılar, merkez bankalarından gelecek mesajlara ve jeopolitik gelişmelere odaklanmış durumda.',
    time: '1 saat önce',
    image: economyImage,
    path: '/fitchten-abd-ekonomisinin-buyume-hizinda-son-ceyrekte-keskin-yavaslama-beklentisi',
    featured: true,
  },
  {
    category: 'Magazin',
    title: 'Ünlü sanatçıdan sürpriz karar: Sahnelere ara veriyor',
    time: '2 saat önce',
    image: entertainmentImage,
    path: '/aleyna-tilki-projem-herkese-iyi-gelecek',
  },
  {
    category: 'Dünya',
    title: 'Dünya liderlerinden küresel ateşkes için yeni çağrılar',
    time: '3 saat önce',
    image: worldImage,
    path: '/bmden-dunya-liderlerine-kuresel-ateskes-cagrisi',
  },
  {
    category: 'Spor',
    title: 'Süper Lig ekibinden yüksek irtifa kampında yoğun tempo',
    time: '4 saat önce',
    image: sportsImage,
    path: '/galatasaray-yuksek-irtifada',
  },
  {
    category: 'Gündem',
    title: 'Yüz yüze eğitim için okullarda yeni hazırlık dönemi',
    time: '5 saat önce',
    image: educationImage,
    path: '/bakan-ziya-selcuk-yuz-yuze-egitime-iliskin-video-paylasti',
  },
];

const mostRead = [
  {
    category: 'Ekonomi',
    title: 'Asgari ücret tespit komisyonu toplanıyor: Masadaki rakamlar',
    path: '/dolar-kuru-bugun-ne-kadar',
  },
  {
    category: 'Dünya',
    title: 'Yeni pandemi uyarısı: Sağlık otoritelerinden kritik açıklama',
    path: '/avrupada-ikinci-corona-virus-dalgasi-eden-ortaya-cikti',
  },
  {
    category: 'Spor',
    title: 'Süper Lig transfer gündemi hareketlendi: İmzalar bekleniyor',
    path: '/galatasaraya-okay-yokuslu-surprizi',
  },
  {
    category: 'Teknoloji',
    title: 'Akıllı telefonlarda fiyat artışı kapıda mı? Sektör analizi',
    path: '/yandex-turkiye-ofisini-kapatiyor',
  },
  {
    category: 'Gündem',
    title: 'Elektrik üretim ve tüketim verilerinde günlük tablo açıklandı',
    path: '/gunluk-elektrik-uretim-ve-tuketim-verileri',
  },
];

const heroSlides = [
  {
    category: 'Gündem',
    title: 'Beyrut Limanı\'nda şiddetli patlama: Kent genelinde büyük hasar oluştu',
    summary:
      'Liman bölgesinde meydana gelen patlama sonrası arama kurtarma çalışmaları sürerken, yerel yetkililer hasarın boyutunu değerlendiriyor.',
    time: '12 dakika önce',
    image: heroPort,
    path: '/beyrut-limanindaki-patlama-sonrasi-9-kisi-hala-kayip',
    alt: 'Beyrut Limanı\'nda patlama sonrası liman bölgesi',
  },
  {
    category: 'Ekonomi',
    title: 'Küresel piyasalarda dalgalanma: Yatırımcılar yeni haftaya temkinli başladı',
    summary:
      'Döviz, altın ve borsa tarafında hareketlilik sürerken, piyasalar merkez bankalarından gelecek mesajları bekliyor.',
    time: '1 saat önce',
    image: economyImage,
    path: '/dolar-kuru-bugun-ne-kadar',
    alt: 'Finans piyasalarını gösteren ekranlar ve altın görseli',
  },
  {
    category: 'Spor',
    title: 'Süper Lig ekibi yüksek irtifa kampında yeni sezona hazırlanıyor',
    summary:
      'Teknik heyet, yoğun antrenman temposuyla takımın fiziksel seviyesini artırmayı hedefliyor.',
    time: '4 saat önce',
    image: sportsImage,
    path: '/galatasaray-yuksek-irtifada',
    alt: 'Dağ manzaralı futbol sahasında antrenman',
  },
];

function Anasayfa() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      <div className="home-shell">
        <section className="home-hero-slider" aria-label="Öne çıkan haberler">
          {heroSlides.map((slide, index) => (
            <Link
              className={index === activeSlide ? 'home-hero home-hero--active' : 'home-hero'}
              to={slide.path}
              key={slide.title}
              aria-hidden={index !== activeSlide}
              tabIndex={index === activeSlide ? 0 : -1}
            >
              <img src={slide.image} alt={slide.alt} />
              <div className="home-hero__overlay">
                <span className="news-pill">{slide.category}</span>
                <h1>{slide.title}</h1>
                <p>{slide.summary}</p>
                <div className="home-hero__meta">
                  <span className="home-hero__button">Habere Git</span>
                  <span>{slide.time}</span>
                </div>
              </div>
            </Link>
          ))}

          <div className="home-hero__dots" aria-label="Slider kontrolleri">
            {heroSlides.map((slide, index) => (
              <button
                className={index === activeSlide ? 'active' : ''}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`${index + 1}. haberi göster: ${slide.title}`}
                key={slide.title}
              />
            ))}
          </div>
        </section>

        <section className="home-grid">
          <div className="latest-section">
            <SectionHeading title="Son Haberler" linkText="Tümünü Gör" linkTo="/gundem" />

            <div className="latest-grid">
              {latestNews.map((item) => (
                <NewsCard
                  item={item}
                  featured={item.featured}
                  key={item.title}
                  showSummary={Boolean(item.summary)}
                  variant="latest"
                />
              ))}
            </div>
          </div>

          <PopularList items={mostRead} />
        </section>

        <section className="wide-story">
          <img src={energyImage} alt="Elektrik şebekesi kontrol merkezi" />
          <div>
            <span className="news-pill news-pill--dark">Ekonomi</span>
            <h2>Günlük elektrik üretim ve tüketim verileri açıklandı</h2>
            <p>
              Enerji piyasasında arz-talep dengesi yakından izlenirken, uzmanlar
              günlük verilerin sanayi üretimi için önemli sinyaller taşıdığını belirtiyor.
            </p>
            <Link to="/gunluk-elektrik-uretim-ve-tuketim-verileri">Detayları Oku</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Anasayfa;
