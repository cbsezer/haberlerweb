import React from 'react';
import { Link } from 'react-router-dom';
import './Ekonomi.css';

import economyImage from '../assets/generated/news-economy.png';
import energyImage from '../assets/generated/news-energy.png';
import worldImage from '../assets/generated/news-world.png';
import diplomacyImage from '../assets/generated/detail-diplomacy.png';
import detailImage from '../assets/generated/detail-beirut-port.png';

const indicators = [
  { label: 'Enflasyon (Yıllık)', value: '%48,58', icon: '%' },
  { label: 'İşsizlik Oranı', value: '%8,50', icon: 'İŞ' },
  { label: 'Politika Faizi', value: '%50,00', icon: 'FZ' },
  { label: 'Cari Açık (Aylık)', value: '$2,1B', icon: '$' },
];

const news = [
  {
    category: 'Yatırım',
    title: 'Altın fiyatlarında yeni rekor: ONS 2700 doları aştı',
    summary: 'Küresel jeopolitik risklerin artmasıyla güvenli liman arayışı altına olan talebi zirveye taşıdı.',
    author: 'Ahmet Yılmaz',
    time: '2 saat önce',
    image: economyImage,
  },
  {
    category: 'Dış Ticaret',
    title: 'İhracat rakamlarında yükseliş: Otomotiv sektörü lider',
    summary: 'Eylül ayı ihracat verileri, otomotiv ve tekstil sektöründeki güçlü performansla beklentileri aştı.',
    author: 'Elif Demir',
    time: '5 saat önce',
    image: worldImage,
  },
  {
    category: 'Teknoloji',
    title: 'Dev teknoloji şirketi Türkiye’de yatırım yapıyor',
    summary: 'Küresel yazılım devi, İstanbul’da yeni bir veri merkezi kurmak için hazırlıklarını sürdürüyor.',
    author: 'Mert Arkan',
    time: '7 saat önce',
    image: economyImage,
  },
  {
    category: 'Bankacılık',
    title: 'Kredi faizlerinde indirim beklentisi piyasayı ısıttı',
    summary: 'Bankaların konut kredisi faiz oranlarını düşüreceği yönündeki iddialar emlak sektörünü canlandırdı.',
    author: 'Canan Öz',
    time: 'Yarın',
    image: detailImage,
  },
  {
    category: 'Emlak',
    title: 'Sürdürülebilir konut projelerine devlet desteği',
    summary: 'Yeşil bina sertifikalı projelere sağlanan düşük faizli finansman imkânları büyümeyi destekliyor.',
    author: 'Serkan Bulut',
    time: 'Dün',
    image: diplomacyImage,
  },
  {
    category: 'Enerji',
    title: 'Yenilenebilir enerji yatırımları 5 kat arttı',
    summary: 'Güneş ve rüzgâr enerjisi santralleri, ülkenin toplam enerji üretimindeki payını hızla artırıyor.',
    author: 'Mine Kaya',
    time: '2 gün önce',
    image: energyImage,
  },
];

function Ekonomi() {
  return (
    <main className="economy-page">
      <section className="economy-title">
        <h1>Ekonomi</h1>
        <span></span>
      </section>

      <section className="economy-hero-grid">
        <Link className="economy-main-story" to="/dolar-kuru-bugun-ne-kadar">
          <img src={economyImage} alt="Finans piyasaları ve yatırım göstergeleri" />
          <div>
            <span>Ana Haber</span>
            <h2>Merkez Bankası faiz kararını açıkladı: Piyasalar hareketli</h2>
            <p>
              Para Politikası Kurulu, enflasyon beklentilerini ve küresel piyasa koşullarını
              değerlendirerek yılın son çeyreğine ilişkin kritik kararını verdi.
            </p>
          </div>
        </Link>

        <aside className="economy-side-stories">
          <Link to="/borsa-gunu-dususle-tamamladi">
            <span>Borsa</span>
            <h3>BIST 100 rekor seviyeyi test ediyor</h3>
            <p>Teknoloji ve bankacılık endekslerindeki yükseliş trendi yatırımcıların odağını değiştirdi.</p>
          </Link>
          <Link to="/altin-fiyatlari-bugun-ne-kadar-oldu">
            <span>Kripto</span>
            <h3>Bitcoin 70.000 dolar sınırında</h3>
            <p>Kurumsal alımların artmasıyla dijital varlık piyasasında yeni hareketlilik yaşanıyor.</p>
          </Link>
          <Link className="finance-live" to="/">
            <div>
              <strong>Canlı Yayın</strong>
              <b>Finans Bülteni</b>
            </div>
            <span>Oynat</span>
          </Link>
        </aside>
      </section>

      <section className="economy-indicators">
        {indicators.map((item) => (
          <article key={item.label}>
            <span>{item.icon}</span>
            <div>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="economy-news">
        <header>
          <h2>Son Haberler</h2>
          <div aria-hidden="true">
            <span>▦</span>
            <span>▤</span>
          </div>
        </header>

        <div className="economy-news-grid">
          {news.map((item) => (
            <Link className="economy-news-card" to="/dolar-kuru-bugun-ne-kadar" key={item.title}>
              <img src={item.image} alt={item.title} />
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.author} · {item.time}</small>
            </Link>
          ))}
        </div>

        <button className="load-more-economy" type="button">Daha Fazla Haber Yükle</button>
      </section>

      <footer className="economy-footer">
        <h2>HBR NEWS</h2>
        <nav>
          <Link to="/">Hakkımızda</Link>
          <Link to="/">İletişim</Link>
          <Link to="/">Gizlilik Politikası</Link>
          <Link to="/">Kullanım Şartları</Link>
        </nav>
        <p>© 2024 HBR News Portal. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}

export default Ekonomi;
