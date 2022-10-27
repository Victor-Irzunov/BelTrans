import { Button, Form, Input, Tooltip } from 'antd'

import React from 'react'

const FormSubscribe = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Tooltip title="Сообщим об акциях и новых скидках" color='volcano'>
			<Form
				name="basic"
				style={{ display: 'flex' }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="username"
					wrapperCol={{
						offset: 0,
						span: 24,
					}}
					rules={[
						{
							required: true,
							message: 'Введите почту!',
						},
					]}
				>
					<Input
						placeholder='Для рассылок акций'
					/>
				</Form.Item>
				<Form.Item
					style={{ marginRight: '.4em' }}
					wrapperCol={{
						offset: 1,
						// span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Подписаться
					</Button>
				</Form.Item>
			</Form>
		</Tooltip>
	)
}
export default FormSubscribe