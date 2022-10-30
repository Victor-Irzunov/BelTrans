import {
	// PhoneOutlined,
	SmileOutlined
} from '@ant-design/icons'
import { Button, notification } from 'antd'
import React from 'react'
import FormNotification from './formNotication/FormNotivication'


const openNotification = (placement) => {
	notification.info({
		message: `Напишите номер телефона`,
		description: <FormNotification />,
		placement,
		icon: (
			<SmileOutlined
				style={{
					color: '#fe7202',
				}}
			/>
		),
		duration: 0,
	})
}
const NotificationComp = ({ text, type, icon }) => (
	<>
		<Button
			type={type}
			onClick={() => openNotification('top')}
			icon={icon}
		>
			{text}
		</Button>

	</>
)
export default NotificationComp