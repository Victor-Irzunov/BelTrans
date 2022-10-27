import { Descriptions, } from 'antd'
import React from 'react'


const DescriptionsComp = ({ descriptions }) => {
	return (
		<Descriptions
			title="Тариф"
			bordered column={3}
			layout='vertical'
		>
			<Descriptions.Item label="Вес">

				{`${descriptions?.mass}т до ${descriptions?.mass2}м`}<sup><small>3</small></sup>
				{/* &nbsp; */}
			</Descriptions.Item>
			<Descriptions.Item label="1 час">{`${descriptions?.price}руб.`}</Descriptions.Item>
			<Descriptions.Item label="1 км.">{`${descriptions?.km}руб.`}</Descriptions.Item>
			<Descriptions.Item label="Грузчики">{`${descriptions?.gruz}руб./час`}</Descriptions.Item>
			<Descriptions.Item label="Время">{`от ${descriptions?.time}-х часов`}</Descriptions.Item>
		</Descriptions >
	)
}
export default DescriptionsComp