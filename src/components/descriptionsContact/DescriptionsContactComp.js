import { Descriptions, Badge, Space } from 'antd'
import React from 'react'
import { useScreens } from '../../Constants/constants'

const DescriptionsContactComp = () => {
	const screens = useScreens()

	return (
		<Descriptions
			style={screens.xs ? { paddingLeft: '.5em' } : undefined}
			title="Контактные данные"
			layout="vertical"
			column={1}
			bordered={false}
			labelStyle={{ fontWeight: "bold" }}
		>
			<Descriptions.Item label="Адрес">
				Республика Беларусь<br />
				г. Минск ул. Калинина 105
			</Descriptions.Item>
			<Descriptions.Item label="Время работы">
				<Space direction="vertical">
					<Badge status="success" text="Пн: 8:00-20:00" />
					<Badge status="success" text="Вт: 8:00-20:00" />
					<Badge status="success" text="Ср: 8:00-20:00" />
					<Badge status="success" text="Чт: 8:00-20:00" />
					<Badge status="success" text="Пт: 8:00-20:00" />
					<Badge status="warning" text="Сб: 9:00-18:00" />
					<Badge status="error" style={{ color: 'red' }} text="Вс: выходной" />
				</Space>
			</Descriptions.Item>
			<Descriptions.Item label="Телефон">
				+375 29 333-33-33
			</Descriptions.Item>
			<Descriptions.Item label="Телеграм">
				@Victor_developer
			</Descriptions.Item>
			<Descriptions.Item label="Почта">
				exemple@gmail.com
			</Descriptions.Item>
		</Descriptions>
	)
}
export default DescriptionsContactComp