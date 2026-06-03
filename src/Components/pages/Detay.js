import React from 'react';
import { Link } from 'react-router-dom';
import './Detay.css';
import NewsCard from '../common/NewsCard';
import NewsletterWidget from '../common/NewsletterWidget';
import PopularList from '../common/PopularList';
import SiteFooter from '../common/SiteFooter';

import detailImage from '../assets/generated/detail-beirut-port.png';
import diplomacyImage from '../assets/generated/detail-diplomacy.png';
import economyImage from '../assets/generated/news-economy.png';
import worldImage from '../assets/generated/news-world.png';

const popularNews = [
  {
    title: 'EYT düzenlemesinde yeni gelişme: Kimler yararlanacak?',
    time: '2 saat önce',
  },
  {
    title: 'Merkez Bankası faiz kararını açıkladı: Dolar ne olur?',
    time: '4 saat önce',
  },
  {
    title: 'Yeni iPhone modelleri tanıtıldı: Fiyatlar dudak uçuklatıyor',
    time: 'Bugün',
  },
];

const relatedNews = [
  {
    category: 'Diplomasi',
    title: 'Lübnan’da hükümet krizi derinleşiyor',
    image: diplomacyImage,
  },
  {
    category: 'Ekonomi',
    title: 'Orta Doğu piyasalarında yeni dengeler',
    image: economyImage,
  },
];

function Detay() {
  return (
    <main className="detail-page">
      <div className="detail-shell">
        <article className="detail-article">
          <nav className="detail-breadcrumb" aria-label="Sayfa yolu">
            <Link to="/">Anasayfa</Link>
            <span>›</span>
            <Link to="/gundem">Gündem</Link>
            <span>›</span>
            <strong>Detay</strong>
          </nav>

          <header className="detail-header">
            <span className="detail-category">Dünya</span>
            <h1>Beyrut Limanı’ndaki patlama sonrası 9 kişi hâlâ kayıp</h1>

            <div className="detail-meta">
              <div className="detail-author">
                <div className="detail-author__avatar">KA</div>
                <div>
                  <strong>Kemal Arıkan</strong>
                  <span>Kıdemli Editör</span>
                </div>
              </div>
              <div className="detail-date">
                <span>Yayınlanma: 15 Ağustos 2024</span>
                <span>Okuma süresi: 6 dk.</span>
              </div>
            </div>
          </header>

          <figure className="detail-main-image">
            <img src={detailImage} alt="Beyrut Limanı patlama sonrası gün batımında görüntüleniyor" />
            <figcaption>
              Fotoğraf: Beyrut Limanı’ndaki mevcut durum gün batımında böyle görüntülendi.
            </figcaption>
          </figure>

          <section className="detail-content">
            <p className="lead">
              Lübnan’ın başkenti Beyrut’ta 2020 yılında meydana gelen devasa patlamanın
              ardından yürütülen arama ve kimlik tespit çalışmaları sürüyor. Son resmî
              raporlara göre, aradan yıllar geçmesine rağmen 9 kişiden hâlâ haber alınamıyor.
            </p>
            <p>
              Beyrut Limanı’nda depolanan amonyum nitratın patlamasıyla sarsılan şehir,
              modern tarihin en büyük nükleer olmayan patlamalarından birine tanıklık
              etmişti. Bugün bile liman çevresindeki yıkıntıların arasında adalet arayan
              ailelerin bekleyişi devam ediyor.
            </p>
            <blockquote>
              “Liman sadece beton ve demir yığını değil, sevdiklerimizin son görüldüğü yer.
              Onları bulana kadar bu dosya kapanmayacak.”
            </blockquote>
            <p>
              Lübnan Sivil Savunma ekipleri, son aylarda teknolojik imkânların artmasıyla
              birlikte enkaz altındaki ulaşılamayan noktalarda yeni taramalar başlattı.
              Ancak ekonomik kriz ve siyasi belirsizlikler, arama kurtarma ve kimliklendirme
              süreçlerini sekteye uğratmaya devam ediyor.
            </p>
            <p>
              Adli tıp uzmanları, bulunan bazı kalıntıların DNA testlerinin sürdüğünü
              belirtirken, kayıp yakınları derneği her ayın 4’ünde liman önünde toplanarak
              sorumluların yargılanması için eylemlerini sürdürüyor.
            </p>
          </section>

          <div className="detail-share">
            <span>Paylaş:</span>
            <button type="button" aria-label="Haberi paylaş">S</button>
            <button type="button" aria-label="Haber bağlantısını kopyala">L</button>
            <button type="button" aria-label="Haberi e-posta ile gönder">M</button>
          </div>

          <section className="related-section">
            <h2>İlgini Çekebilir</h2>
            <div className="related-grid">
              {relatedNews.map((item) => (
                <NewsCard item={item} key={item.title} to="/gundem" variant="related" />
              ))}
            </div>
          </section>
        </article>

        <aside className="detail-sidebar">
          <PopularList
            className="detail-widget popular-widget"
            itemClassName="popular-item"
            items={popularNews}
            metaKey="time"
            to="/gundem"
          />

          <NewsletterWidget />

          <Link className="live-card" to="/">
            <img src={worldImage} alt="HBR TV canlı yayın stüdyosu" />
            <div>
              <span>Canlı Yayın</span>
              <h2>HBR TV Canlı İzle</h2>
              <p>Kesintisiz ve tarafsız haberin adresi.</p>
            </div>
          </Link>
        </aside>
      </div>

      <SiteFooter
        className="detail-footer"
        description="Dünyadan ve Türkiye’den en güncel haberler, analizler ve özel dosyalarla haberin merkezindeyiz."
        links={[
          { label: 'Kurumsal' },
          { label: 'Yasal' },
          { label: 'Sosyal' },
        ]}
      />
    </main>
  );
}

export default Detay;
