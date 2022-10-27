import { Progress } from 'antd'
import React from 'react'

const ProgressBar = () => (
	<div>
		<p style={{fontSize:'1.8em'}}>Нас заказывают:</p>
		<Progress percent={55} format={percent => `${percent}% Минск`} strokeColor='#08f49c' />
		<Progress percent={20} format={percent => `${percent}% Минская область`} strokeColor='#fe7202' />
		<Progress percent={7} format={percent => `${percent}% Брестская область`} strokeColor='#fe7202' />
		<Progress percent={4} format={percent => `${percent}% Витебская область`} strokeColor='#fe7202' />
		<Progress percent={3} format={percent => `${percent}% Гомельская область`} strokeColor='#f80759' />
		<Progress percent={5} format={percent => `${percent}% Гродненская область`} strokeColor='#fe7202' />
		<Progress percent={6} format={percent => `${percent}% Могилёвская область`} strokeColor='#fe7202' />
	</div>
);
export default ProgressBar