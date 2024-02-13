import { Descriptions, Typography } from 'antd'
import React, { useState } from 'react'
const { Paragraph } = Typography


const DescriptionsComp = ({ descriptions }) => {
	const [edit, setEdit] = useState(descriptions)
	// console.log('edit: ', edit)

	// const f1 = () => {
	// 	const str = '123.01'
	// 	console.log('strNum: ', +str)
	// }


	return (
		<Descriptions
			title="Тариф"
			bordered column={3}
			layout='vertical'
		>
			<Descriptions.Item label="Вес">
				{`${descriptions?.mass}т до ${descriptions?.mass2}м`}<sup><small>3</small></sup>
			</Descriptions.Item>
			<Descriptions.Item label="1 час (руб.)">
				<Paragraph
					editable={{
						onChange: e => setEdit({ ...edit, price: +e }),
						triggerType: 'text',
						// onEnd: f1,
					}}
				>
					{`${edit.price.toFixed(2)}`}
				</Paragraph>
			</Descriptions.Item>
			<Descriptions.Item label="1 км. (руб.)">{`${descriptions?.km}`}</Descriptions.Item>
			<Descriptions.Item label="Грузчики (руб./час)">{`${descriptions?.gruz}`}</Descriptions.Item>
			<Descriptions.Item label="Время">{`${descriptions?.time}`}</Descriptions.Item>
		</Descriptions >
	)
}
export default DescriptionsComp