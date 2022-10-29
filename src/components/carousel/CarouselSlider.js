import { Carousel } from 'antd';
import React from 'react';
import dostavka from './img/dostavka.webp'
import pereezd from './img/pereezd.webp'
import mebel from './img/mebel.webp'
import { useScreens } from '../../Constants/constants'


const CarouselSlider = () => {
	const screens = useScreens()
	const contentStyle = {
		height: '40vh',
		width: '100%',
		color: '#fff',
		// lineHeight: '25vh',
		textAlign: 'center',
		background: '#364d79',
	}
	if (screens.xs) contentStyle.height = '25vh'
	return (
		<div>
			<Carousel dotPosition='left' effect='fade' autoplay>

				<div>
					<img src={pereezd} style={contentStyle} alt='Квартирный переезд' />
				</div>
				<div>
					<img src={mebel} style={contentStyle} alt='Перевозка мебели' />
				</div>
				<div>
					<img src={dostavka} style={contentStyle} alt='Доствка груза' />
				</div>
			</Carousel>
		</div>
	);
};
export default CarouselSlider;