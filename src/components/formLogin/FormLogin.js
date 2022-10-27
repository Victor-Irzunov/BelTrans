import { Button, Checkbox, Form, Input } from 'antd'
import React, {useState} from 'react'




const FormLogin = ({setOpenModal}) => {
	const [loading, setLoading] = useState(false)

	const onFinish = (values) => {
		console.log('Success:', values)
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false)
			setOpenModal(false)
		}, 2000)
	}


	return (
		<Form
			name="login"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your username!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button
					type="primary"
					htmlType="submit"
					loading={loading} onClick={handleOk}
				>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormLogin