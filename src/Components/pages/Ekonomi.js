import React from 'react';
import CardItem from '../Card/CardItem'
import '../Card/Cards.css'

function Ekonomi() {
  const mystyle = {
    color:"white",
    margin:"0",
    fontFamily: 'Lobster',
    fontSize:70,
    fontWeight: 'italic',
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #ba9d0e, #e1bd0c)"
  };
    return (
        <div>
        <h1 style={mystyle}>Ekonomi</h1>
        <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn1.ntv.com.tr/gorsel/aN_31_MKpUqpcPHGctNBKA.jpg?width=660&mode=both&scale=both'
              text='Fitchten ABD ekonomisinin büyüme hızında son çeyrekte "keskin yavaşlama" beklentisi'
              path='/fitchten-abd-ekonomisinin-buyume-hizinda-son-ceyrekte-keskin-yavaslama-beklentisi'
            />
            <CardItem
              src='https://cdn1.ntv.com.tr/gorsel/Q_CecsLYkkmJf_QudNIPZQ.jpg?width=660&mode=both&scale=both'
              text='Dolar kuru bugün ne kadar?'
              path='/dolar-kuru-bugun-ne-kadar'
            />
            <CardItem
            src='https://cdn1.ntv.com.tr/gorsel/Xu_KvdMaQk6vv9Xv1qlMJA.jpg?width=660&mode=both&scale=both&v=1600757921852'
            text='38. Amerika-Türkiye Konferansı başladı'
            path='/38-amerika-turkiye-konferansi-basladi'
          />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn1.ntv.com.tr/gorsel/SrRJM12MikqeoOowQeId5A.jpg?width=660&mode=both&scale=both'
              text='Borsa, günü düşüşle tamamladı'
              path='/borsa-gunu-dususle-tamamladi'
            />
            <CardItem
              src='https://cdn1.ntv.com.tr/gorsel/SH1xTvCzs0WlumyM0RA6tg.jpg?width=660&mode=both&scale=both'
              text='Altın fiyatları bugün ne kadar oldu?'
              path='/altin-fiyatlari-bugun-ne-kadar-oldu'
            />
            <CardItem
              src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b227dd885746f038-1600513099.jpg'
              text='Günlük elektrik üretim ve tüketim verileri'
              path='/gunluk-elektrik-uretim-ve-tuketim-verileri'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
            src='https://cdn1.ntv.com.tr/gorsel/AkWRxZJYNka00L3E8q1Lyw.jpg?width=660&mode=both&scale=both&v=1591689131162'
            text='Tüketici en çok cep telefonu ve ayakkabıdan şikayetçi'
            path='/tuketici-en-cok-cep-telefonu-ve-ayakkabidan-sikayetci'
          />
          <CardItem
            src='https://cdn1.ntv.com.tr/gorsel/uiNuc8ECb0eBK3B4iipCSw.jpg?width=660&mode=both&scale=both'
            text='Yerli markadan glutensiz ürün hamlesi'
            path='/yerli-markadan-glutensiz-urun-hamlesi'
          />
          <CardItem
            src='https://cdn1.ntv.com.tr/gorsel/eBkRjPPZs02f50OrXmzD-w.jpg?width=660&mode=both&scale=both'
            text='İstanbulda konut fiyatları yüzde 30 arttı'
            path='/istanbulda-konut-fiyatlari-yuzde-30-artti'
          />
          <CardItem
          src='https://cdn1.ntv.com.tr/gorsel/VsX09efHoUGGHG8JuBEgZQ.jpg?width=660&mode=both&scale=both'
          text='Yandex Türkiye ofisini kapatıyor'
          path='/yandex-turkiye-ofisini-kapatiyor'
        />
        <CardItem
          src='https://cdn1.ntv.com.tr/gorsel/4PD4etYCHky_s11lqeU5Ng.jpg?width=660&mode=both&scale=both'
          text='Apple 532 milyar dolar kaybetti'
          path='/apple-532-milyar-dolar-kaybetti'
        />
        </ul>
        </div>
      </div>
    </div>
  

        </div>
      
    );
  }
  
  export default Ekonomi;
  