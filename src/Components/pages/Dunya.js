import React from 'react';
import CardItem from '../Card/CardItem'
import '../Card/Cards.css'

function Dunya() {
  const mystyle = {
    color: "white",
    margin: "0",
    fontFamily: 'Lobster',
    fontSize: 70,
    fontWeight: 'italic',
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
  };
  return (
    <div>
      <h1 style={mystyle}>Dünya</h1>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/lqT1bYaj1EWHKQKpDTvoRg.jpg?width=1000&mode=both&scale=both&v=1600678888422'
                text='Avrupada ikinci corona virüs dalgası neden ortaya çıktı?'
                path='/avrupada-ikinci-corona-virus-dalgasi-eden-ortaya-cikti'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/HT_X1bAcVEWPXU9jdx-Skw.jpg?width=660&mode=both&scale=both'
                text='Covid-19 nedeniyle Çekya Sağlık Bakanı istifa etti'
                path='/cekyada-covid-19-nedeniyle-saglik-bakani-istifa-etti'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/5aeYOIyrBEi5K3M0qNQGWQ.jpg?width=660&mode=both&scale=both'
                text='Belarustaki protestolarda 442 kişi gözaltına alındı'
                path='/belarustaki-protestolarda-442-kisi-gozaltina-alindi'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/B8rZzJxq_ka7xxPxeFnJNA.jpg?width=660&mode=both&scale=both'
                text='Trumpa zehirli mektup göndermek isteyen kişi yakalandı'
                path='/trumpa-zehirli-mektup-gondermek-isteyen-kisi-yakalandi'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/_GhowqfxPUOfjtsli17iCA.jpg?width=660&mode=both&scale=both'
                text='Rusyada Covid-19 vaka sayısı 1 milyon 110 bine yaklaştı'
                path='/rusyada-covid-19-vaka-sayisi-1-milyon-110-bine-yaklasti'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/i7jWdLBoCEGGROiiv08wzg.jpg?width=660&mode=both&scale=both'
                text='Avustralyada Covid-19 can kaybı ve vakaları düşüyor'
                path='/avustralyada-covid-19-can-kaybi-ve-vakalari-dusuyor'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/JHfFYewdOUOJqHYOO4qkzw.jpg?width=1000&mode=both&scale=both&v=1600315797079'
                text='ABDdeki orman yangınlarında hayatını kaybedenlerin sayısı 34e yükseldi'
                path='/abddeki-orman-yanginlarinda-hayatini-kaybedenlerin-sayisi-34e-yukseldi'
              />
              <CardItem
                src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b944e74ed39f093b-1600524717.jpg'
                text='ABD de Covid-19 dan yaşamını yitirenlerin sayısı 203 bin 188 e yükseldi'
                path='/abdde-kovid-19dan-yasamini-yitirenlerin-sayisi-203-bin-188e-yukseldi'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/ObP-XnrOTUGB42DWvkBxXg.jpg?width=660&mode=both&scale=both'
                text='BMden dünya liderlerine "küresel ateşkes" çağrısı'
                path='/bmden-dunya-liderlerine-kuresel-ateskes-cagrisi'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/lqT1bYaj1EWHKQKpDTvoRg.jpg?width=1000&mode=both&scale=both&v=1600678888422'
                text='Avrupada ikinci corona virüs dalgası neden ortaya çıktı?'
                path='/avrupada-ikinci-corona-virus-dalgasi-eden-ortaya-cikti'
              />
              <CardItem
                src='https://cdn1.ntv.com.tr/gorsel/HT_X1bAcVEWPXU9jdx-Skw.jpg?width=660&mode=both&scale=both'
                text='Covid-19 nedeniyle Çekya Sağlık Bakanı istifa etti'
                path='/cekyada-covid-19-nedeniyle-saglik-bakani-istifa-etti'
              />
            </ul>
          </div>
        </div>
      </div>


    </div>

  );
}

export default Dunya;
