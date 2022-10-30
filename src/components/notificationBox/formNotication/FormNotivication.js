import {
	Form,
	Input,
	message,
	Button
} from 'antd'
import React from 'react'
import { request } from '../../../http/Http'

const FormNotification = () => {
	const [form] = Form.useForm()
	const onFinish = (values) => {
		const data = { phone: values.tel, }

		let messageForm = `<b>Перезвонить клиенту с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Телефон: </b> ${data.phone}\n`

		message.success('Сообщение отправлено')
		request(messageForm).then(data => {
			if (data.status === 200) {
				message.success('Сообщение принято, как только освободимся сразу перезвоним.')
				form.resetFields()
			}
		})
	}
	const onFinishFailed = (errorInfo) => {
		message.error('Ошибка')
	}
	return (
		<Form
			name="basic"
			form={form}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Ваш телефон"
				name="tel"
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите телефон!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 20,
					span: 16,
				}}
			>
				<Button
					type="primary"
					htmlType="submit"
				>
					OK
				</Button>
			</Form.Item>
		</Form>
	)
}
export default FormNotification