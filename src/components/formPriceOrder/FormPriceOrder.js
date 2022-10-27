import { Button, DatePicker, Form, Input, Tooltip, message } from 'antd'
import { InfoCircleOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'
import axios from "axios"
const { TextArea } = Input
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


const FormPriceOrder = ({ obj, setOpenModal, setSelectedRowKeys }) => {
	const [form] = Form.useForm()



	const onFinish = values => {

		const data = {
			name: values.username,
			phone: values.tel,
			date: !values.date ? '-' : values.date._d.toLocaleDateString("ru-RU"),
			message: values.message,
			info: !obj?.info ? '-' : obj?.info,
			title: !obj?.checked ? '-' : obj?.checked.join(),
			price: !obj?.price ? '-' : obj?.price,
		}


		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Дата: </b> ${data.date} \n`
		messageForm += `<b>Что надо: </b> ${data.title}\n`
		messageForm += `<b>Инф: </b> ${data.info}\n`
		messageForm += `<b>Сообщение: </b> <i>«${!data.message ? '-' : data.message}»</i>\n`
		messageForm += `<b>Цена: </b> <i>«${data.price}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${!data.name ? '-' : data.name}\n`
		messageForm += `<b>Телефон: </b> ${data.phone}\n`

		message.success('Заказ отправлен')

		axios.post(uri_api, {
			chat_id,
			parse_mode: 'html',
			text: messageForm,
		}).then(data => {
			if (data.status === 200) {
				message.success('Заказ принят')
				setOpenModal(false)
				form.resetFields();
				setSelectedRowKeys([])
			}
		})
	};


	const onFinishFailed = (errorInfo) => {
		message.error('Ошибка');
	}
	return (
			<Form
				name="basic"
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 12,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				form={form}
			>

				<Form.Item
					label="Имя"
					name="username"
				>
					<Input
						placeholder="Введите Ваше Имя"
						prefix={<UserOutlined className="site-form-item-icon" />}
						suffix={
							<Tooltip title="Необязательно">
								<InfoCircleOutlined
									style={{
										color: 'rgba(0,0,0,.45)',
									}}
								/>
							</Tooltip>
						}
					/>
				</Form.Item>
				<br />

				<Form.Item
					label="Телефон"
					name="tel"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите Ваш номер',
						},
					]}
				>
					<Input
						placeholder="Номер телефона"
						prefix={<PhoneOutlined className="site-form-item-icon" />}
						suffix={
							<Tooltip title="Телефон необходим для обратной связи">
								<InfoCircleOutlined
									style={{
										color: 'rgba(0,0,0,.45)',
									}}
								/>
							</Tooltip>
						}
					/>
				</Form.Item>
				<br />


				<Form.Item
					label="Дата"
					name="date"
				>
					<DatePicker
						format={dateFormatList}
					/>
				</Form.Item>


				<Form.Item
					name="message"
					wrapperCol={{
						span: 24,
					}}
				>
					<TextArea
						showCount
						maxLength={100}
						placeholder="Комментарий к заказу"
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						span: 24,
					}}
				>
					<Button type="primary" htmlType="submit">
						Отправить заказ
					</Button>
				</Form.Item>
			</Form>
	)
}
export default FormPriceOrder