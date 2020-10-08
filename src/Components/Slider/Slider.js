import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './Slider.css';
import './styles.css';

const content = [
	{
		title: 'Beyrut Limanındaki patlama sonrası 9 kişi hala kayıp',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		image: 'https://static.daktilo.com/sites/367/uploads/2020/09/19/b944e74ed39f093b-1600524717.jpg',
	},
	{
		title: 'Çat Barajının yüzen adaları turizme kazandırılacak',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		image: 'https://static.daktilo.com/sites/367/uploads/2020/09/19/77cea5bddbf267f4-1600504116.jpg'

	},
	{
		title: 'Günlük elektrik üretim ve tüketim verileri',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		image: 'https://static.daktilo.com/sites/367/uploads/2020/09/19/b227dd885746f038-1600513099.jpg'

	}
];

const Kaydirma = () => (
	<div>

		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>Habere Git</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default Kaydirma;
