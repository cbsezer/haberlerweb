import React from 'react';
import CardItem from '../Card/CardItem'
import '../Card/Cards.css'

function Magazin() {
  const mystyle = {
    margin: "0",
    color: "white",
    fontFamily: 'Lobster',
    fontSize: 70,
    fontWeight: 'italic',
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #b10088, #f374e8)"
  };
  return (
    <div>
      <h1 style={mystyle}>Magazin</h1>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/19/genc-sarkici-aleyna-tilki-yine-iddiasini-ortaya-13611802_7898_o.jpg'
                text='Genç şarkıcı Aleyna Tilki, yine iddiasını ortaya koydu: Projem herkese iyi gelecek'
                path='/aleyna-tilki-projem-herkese-iyi-gelecek'
              />
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/21/masterchef-turkiye-nin-60-bolum-fragmani-13615302_5534_o.jpg'
                text='MasterChef Türkiyenin 60. bölüm fragmanı yayınlandı!'
                path='/masterchef-turkiye-nin-60-bolum-fragmani'
              />
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/21/koronavirus-golgesinde-toren-72-emmy-odulleri-13615265_1855_m.jpg'
                text='Koronavirüs gölgesinde tören! 72. Emmy Ödülleri sahiplerini buldu'
                path='/72-emmy-odulleri-sahiplerini-buldu'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://foto.sondakika.com/haber/2020/09/22/psikiyatrist-arif-verimli-reyting-rekortmeni-13618207_213_o.jpg'
                text='Psikiyatrist Arif Verimli, reyting rekortmeni Kırmızı Odadaki Binnur Kayanın mimiklerine dikkat çekti'
                path='/psikiyatrist-arif-verimli-reyting-rekortmeni'
              />
              <CardItem
                src='https://foto.sondakika.com/haber/2020/09/21/murat-dalkilic-aska-geldi-hande-ercel-dinlemedi-13616544_3986_o.jpg'
                text='Eski sevgilisi Murat Dalkılıç ile pişti olan Hande Erçelden kafa karıştıran çıkış: Bizi çok sık göreceksiniz'
                path='/murat-dalkilic-aska-geldi-hande-ercel-dinlemedi'
              />
              <CardItem
                src='https://foto.sondakika.com/haber/2020/09/21/acun-ilicali-cocuklar-icin-dizustu-bilgisayar-13615278_6432_m.jpg'
                text='Acun Ilıcalı, çocuklar için dizüstü bilgisayar kampanyası yaptı! Toplanan rakam dudak uçuklattı'
                path='/acun-ilicali-cocuklar-icin-dizustu-bilgisayar'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/19/genc-sarkici-aleyna-tilki-yine-iddiasini-ortaya-13611802_7898_o.jpg'
                text='Genç şarkıcı Aleyna Tilki, yine iddiasını ortaya koydu: Projem herkese iyi gelecek'
                path='/aleyna-tilki-projem-herkese-iyi-gelecek'
              />
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/21/masterchef-turkiye-nin-60-bolum-fragmani-13615302_5534_o.jpg'
                text='MasterChef Türkiyenin 60. bölüm fragmanı yayınlandı!'
                path='/masterchef-turkiye-nin-60-bolum-fragmani'
              />
              <CardItem
                src='https://foto.haberler.com/haber/2020/09/21/koronavirus-golgesinde-toren-72-emmy-odulleri-13615265_1855_m.jpg'
                text='Koronavirüs gölgesinde tören! 72. Emmy Ödülleri sahiplerini buldu'
                path='/72-emmy-odulleri-sahiplerini-buldu'
              />
              <CardItem
                src='https://foto.sondakika.com/haber/2020/09/21/murat-dalkilic-aska-geldi-hande-ercel-dinlemedi-13616544_3986_o.jpg'
                text='Eski sevgilisi Murat Dalkılıç ile pişti olan Hande Erçelden kafa karıştıran çıkış: Bizi çok sık göreceksiniz'
                path='/murat-dalkilic-aska-geldi-hande-ercel-dinlemedi'
              />
              <CardItem
                src='https://foto.sondakika.com/haber/2020/09/21/acun-ilicali-cocuklar-icin-dizustu-bilgisayar-13615278_6432_m.jpg'
                text='Acun Ilıcalı, çocuklar için dizüstü bilgisayar kampanyası yaptı! Toplanan rakam dudak uçuklattı'
                path='/acun-ilicali-cocuklar-icin-dizustu-bilgisayar'
              />
            </ul>
          </div>
        </div>
      </div>


    </div>

  );
}

export default Magazin;
