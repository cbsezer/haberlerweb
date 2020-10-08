import React from 'react';
import CardItem from '../Card/CardItem'
import '../Card/Cards.css'

function Spor() {
  const mystyle = {
    margin: "0",
    color: "white",
    fontFamily: 'Lobster',
    fontSize: 70,
    fontWeight: 'italic',
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #3c9987, #1cc9a7)"
  };
  return (
    <div>
      <h1 style={mystyle}>Spor</h1>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn.ntvspor.net/3a59b5fb74a44c4bb60db934fb029a28.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Galatasaray yüksek irtifada'
                path='/galatasaray-yuksek-irtifada'
              />
              <CardItem
                src='https://cdn.ntvspor.net/a2ea9fa35162408fbdc86cb65968bab5.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Galatasaray: Voleybol takımında 3 korona virüs vakası'
                path='/voleybolda-3-korona-virus-vakasi'
              />
              <CardItem
                src='https://cdn.ntvspor.net/a822940a31da4f80b208a767c417a949.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Michael Jordan, NASCAR takımı kuruyor'
                path='/michael-jordan-nascar-takimi-kuruyor'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn.ntvspor.net/6fd3cbbe480e4c1d9b6609474ba75296.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='ATP Romada şampiyon Novak Djokovic'
                path='/atp-roma-da-sampiyon-novak-djokovic'
              />
              <CardItem
                src='https://cdn.ntvspor.net/dd2ea3c92f4842979bb009b9d4b52caa.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Isiah Thomas: Lebron tüm zamanların en iyisi'
                path='/isiah-thomas-lebron-tum-zamanlarin-en-iyisi'
              />
              <CardItem
                src='https://img.fanatik.com.tr/img/75/740x418/5f6a0204ae298bd5cf070319.jpg'
                text='Galatasaraya Okay Yokuşlu sürprizi'
                path='/galatasaraya-okay-yokuslu-surprizi'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='https://cdn.ntvspor.net/3a59b5fb74a44c4bb60db934fb029a28.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Galatasaray yüksek irtifada'
                path='/galatasaray-yuksek-irtifada'
              />
              <CardItem
                src='https://cdn.ntvspor.net/a2ea9fa35162408fbdc86cb65968bab5.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Galatasaray: Voleybol takımında 3 korona virüs vakası'
                path='/voleybolda-3-korona-virus-vakasi'
              />
              <CardItem
                src='https://cdn.ntvspor.net/a822940a31da4f80b208a767c417a949.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Michael Jordan, NASCAR takımı kuruyor'
                path='/michael-jordan-nascar-takimi-kuruyor'
              />
              <CardItem
                src='https://cdn.ntvspor.net/6fd3cbbe480e4c1d9b6609474ba75296.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='ATP Romada şampiyon Novak Djokovic'
                path='/atp-roma-da-sampiyon-novak-djokovic'
              />
              <CardItem
                src='https://cdn.ntvspor.net/dd2ea3c92f4842979bb009b9d4b52caa.jpg?&mode=crop&w=940&h=626.6666666666666'
                text='Isiah Thomas: Lebron tüm zamanların en iyisi'
                path='/isiah-thomas-lebron-tum-zamanlarin-en-iyisi'
              />
            </ul>
          </div>
        </div>
      </div>


    </div>

  );
}

export default Spor;
