import React from 'react';
import CardItem from '../Card/CardItem'
import '../Card/Cards.css'

function Gundem() {
  const mystyle = {
    color:"white",
    margin:"0",
    fontFamily: 'Lobster',
    fontSize:70,
    fontWeight: 'italic',
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #970909, #d30404)"
  };
  return (
    <React.Fragment>
      <h1 style={mystyle}>Gündem</h1>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://i2.milimaj.com/i/milliyet/75/1200x675/5f69fac655427e1548cd2474.jpg'
                text='Bakan Ziya Selçuk yüz yüze eğitime ilişkin video paylaştı'
                path='/bakan-ziya-selcuk-yuz-yuze-egitime-iliskin-video-paylasti'
              />
              <CardItem
                src='https://i2.milimaj.com/i/milliyet/75/0x410/5f69edfe5542840aa0cc35a8.jpg'
                text='Bursada geniş kapsamlı HES kodu zorunluluğu'
                path='/bursada-genis-kapsamli-hes-kodu-zorunlulugu'
              />
              <CardItem
                src='https://i4.hurimg.com/i/hurriyet/75/750x422/5f68fab22269a22b0cea3e22.jpg'
                text='Sağlık Bakanlığı duyurdu: Milli aşı babayiğitleri aranıyor'
                path='/saglik-bakanligi-duyurdu-milli-asi-babayigitleri-araniyor'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://i4.hurimg.com/i/hurriyet/75/750x422/5f690bcb2269a22b0cea3e67.jpg'
                text='Meclis yeni dönem için yenilendi'
                path='/meclis-yeni-donem-icin-yenilendi'
              />
              <CardItem
                src='https://i4.hurimg.com/i/hurriyet/75/750x422/5f68fc782269a22b0cea3e31.jpg'
                text='Bilim Kurulu üyesi korona oldu'
                path='/bilim-kurulu-uyesi-korona-oldu'
              />
              <CardItem
                src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b227dd885746f038-1600513099.jpg'
                text='Günlük elektrik üretim ve tüketim verileri'
                path='/gunluk-elektrik-uretim-ve-tuketim-verileri'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://www.trthaber.com/resimler/1396000/1397695.jpg'
                text='Bakan Selçuk: Tüm öğrencilere ücretsiz maske desteği vereceğiz'
                path='/bakan-selcuk-tum-ogrencilere-ucretsiz-maske-destegi-verecegiz'
              />
              <CardItem
                src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b944e74ed39f093b-1600524717.jpg'
                text='ABD de Kovid-19 dan yaşamını yitirenlerin sayısı 203 bin 188 e yükseldi'
                path='/abdde-kovid-19dan-yasamini-yitirenlerin-sayisi-203-bin-188e-yukseldi'
              />
              <CardItem
                src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b227dd885746f038-1600513099.jpg'
                text='Günlük elektrik üretim ve tüketim verileri'
                path='/gunluk-elektrik-uretim-ve-tuketim-verileri'
              />
              <CardItem
                src='https://www.trthaber.com/resimler/1396000/1397695.jpg'
                text='Bakan Selçuk: Tüm öğrencilere ücretsiz maske desteği vereceğiz'
                path='/bakan-selcuk-tum-ogrencilere-ucretsiz-maske-destegi-verecegiz'
              />
              <CardItem
                src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b944e74ed39f093b-1600524717.jpg'
                text='ABD de Kovid-19 dan yaşamını yitirenlerin sayısı 203 bin 188 e yükseldi'
                path='/abdde-kovid-19dan-yasamini-yitirenlerin-sayisi-203-bin-188e-yukseldi'
              />
            </ul>
          </div>
        </div>
      </div>


    </React.Fragment>

  );
}

export default Gundem;
