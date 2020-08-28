import React, { Component } from 'react';
import Scroll from './Scroll'

class CardItem extends Component {
    state = {
        news: [
            {
            title: "Koronavirüs tespit edilen okul sayısı 176'ya yükseldi",
            photo: "https://foto.haberler.com/haber/2020/08/28/koronavirus-tespit-edilen-okul-sayisi-176-ya-13549005_8298_o.jpg",
            },
            {
            title: "Dikkatsiz sürücü az kalsın jandarmayı eziyordu! Olay anı kamerada",
            photo: "https://foto.haberler.com/haber/2020/08/28/dikkatsiz-surucu-jandarmayi-eziyordu-13548830_1288_o.jpg",
            },
            {
            title: "BITCOIN İLE KISA SÜREDE MİLYONER OLDU, HAYALLERİNİ GERÇEKLEŞTİRDİ",
            photo: "https://www.kriptocoinborsasi.com/digibtc/images/img-2.png",
            },
            {
            title: "Koronavirüs tespit edilen okul sayısı 176'ya yükseldi",
            photo: "https://foto.haberler.com/haber/2020/08/28/koronavirus-tespit-edilen-okul-sayisi-176-ya-13549005_8298_o.jpg",
            },
    ]
    }
    render() {
        return (
            <div>
                <Scroll news = {this.state.news}/>
            </div>
        )
    }
}

export default CardItem;