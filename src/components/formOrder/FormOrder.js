import {
	Button,
	Select,
	Form,
	Input,
	DatePicker,
	TimePicker,
	message,
	Cascader
} from 'antd';
import React, { useContext } from 'react'
import axios from "axios"
import { options } from '../../content/Content'
import { Context } from '../../index'


const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


const { RangePicker } = DatePicker
const { TextArea } = Input


const FormOrder = () => {
	const [form] = Form.useForm()
	const { data } = useContext(Context)

	const onFinish = (values) => {

		const dataForm = {
			name: values.username,
			phone: values.tel,
			date: {
				from: !values.date ? '-' : values.date[0]._d.toLocaleDateString("ru-RU"),
				before: !values.date ? '-' : values.date[1]._d.toLocaleDateString("ru-RU"),
			},
			time: {
				from: !values.time ? '-' : values.time[0]._d.toLocaleTimeString("ru-RU"),
				before: !values.time ? '-' : values.time[1]._d.toLocaleTimeString("ru-RU")
			},
			mass: values.mass,
			message: values.message,
			perevoz: values.perevoz
		}


		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Дата: </b> ${dataForm.date.from} — ${dataForm.date.before}\n`
		messageForm += `<b>Время: </b> ${dataForm.time.from} — ${dataForm.time.before}\n`
		messageForm += `<b>Вес: </b> ${!dataForm.mass ? '-' : dataForm.mass}\n`
		messageForm += `<b>Что надо: </b> ${!dataForm.perevoz ? '-' : dataForm.perevoz}\n`
		messageForm += `<b>Сообщение: </b> <i>«${!dataForm.message ? '-' : dataForm.message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${!dataForm.name ? '-' : dataForm.name}\n`
		messageForm += `<b>Телефон: </b> ${dataForm.phone}\n`

		message.success('Заказ отправлен');
		axios.post(uri_api, {
			chat_id,
			parse_mode: 'html',
			text: messageForm,
		}).then(res => {
			if (res.status === 200) {
				message.success('Заказ принят')
				form.resetFields()
				data.setIsStepFromForm(true)
			}
		})
	}

	const onFinishFailed = (errorInfo) => {
		message.error('Ошибка');
	}

	return (
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
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
				<Input />
			</Form.Item>

			<Form.Item
				label="Телефон"
				name="tel"
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите Ваш телефон!',
					},
				]}
			>
				<Input />
			</Form.Item>


			<br />
			<Form.Item
				label="Выберите число"
				name="date"
			>
				<RangePicker
					style={{
						width: '100%',
					}}
				/>
			</Form.Item>

			<br />
			<Form.Item
				label="Выберите время"
				name="time"
			>
				<TimePicker.RangePicker
					style={{
						width: '100%',
					}}
				/>
			</Form.Item>

			<br />
			<Form.Item
				label="Вес"
				name="mass"
			>
				<Select>
					<Select.Option value="50">50кг.</Select.Option>
					<Select.Option value="100">100кг.</Select.Option>
					<Select.Option value="200">200кг.</Select.Option>
					<Select.Option value="500">500кг.</Select.Option>
					<Select.Option value="1">1т.</Select.Option>
				</Select>
			</Form.Item>
			<br />
			<br />
			<Form.Item
				label="Необходимо"
				name="perevoz"
			>
				<Cascader
					options={options}
					// onChange={onChange}
					placeholder="Выберите" />
			</Form.Item>
			<br />
			<Form.Item
				label="Сообщение"
				name="message"
			>
				<TextArea rows={4} />
			</Form.Item>
			<br />
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Заказать
				</Button>
			</Form.Item>
		</Form>
	);
};
export default FormOrder





