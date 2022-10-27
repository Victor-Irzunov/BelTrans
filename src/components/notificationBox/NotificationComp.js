import {
	PhoneOutlined,
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
const NotificationComp = () => (
	<>
		<Button
			type="text"
			onClick={() => openNotification('top')}
			icon={<PhoneOutlined />}
		>
			Вам перезвонить?
		</Button>


	</>
)
export default NotificationComp