import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://static.daktilo.com/sites/367/uploads/2020/09/19/b944e74ed39f093b-1600524717.jpg'
              text='Beyrut Limanındaki patlama sonrası 9 kişi hala kayıp'
              path='/beyrut-limanindaki-patlama-sonrasi-9-kisi-hala-kayip'
            />
            <CardItem
              src='https://static.daktilo.com/sites/367/uploads/2020/09/19/77cea5bddbf267f4-1600504116.jpg'
              text='Çat Barajının yüzen adaları turizme kazandırılacak'
              path='/cat-barajinin-yuzen-adalari-turizme-kazandirilacak'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;