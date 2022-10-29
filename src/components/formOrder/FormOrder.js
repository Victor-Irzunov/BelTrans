import {
	Button,
	Select,
	Form,
	Input,
	DatePicker,
	TimePicker,
	message,
	Checkbox
} from 'antd'
import { useScreens } from '../../Constants/constants'
import React, { useContext, useState } from 'react'
import axios from "axios"
import { Context } from '../../index'
const { Option } = Select
const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


const { RangePicker } = DatePicker
const { TextArea } = Input


const FormOrder = () => {
	const screens = useScreens()
	const [form] = Form.useForm()
	const { data } = useContext(Context)
	const [check1, setCheck1] = useState('')
	const [check2, setCheck2] = useState('')

	const onFinish = (values) => {
		const dataForm = {
			name: values.username,
			phone: values.tel,
			date: {
				from: !values.date ? '-' : values.date[0]._d.toLocaleDateString("ru-RU"),
				before: !values.date ? '-' : values.date[1]._d.toLocaleDateString("ru-RU"),
			},
			dateMobil: !values.dateMobil ? '-' : values.dateMobil._d.toLocaleDateString("ru-RU"),
			time: {
				from: !values.time ? '-' : values.time[0]._d.toLocaleTimeString("ru-RU"),
				before: !values.time ? '-' : values.time[1]._d.toLocaleTimeString("ru-RU")
			},
			mass: values.mass,
			message: values.message,
			perevoz: values.perevoz,
			check01: values.check01,
			check02: values.check02,
		}
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		if (screens.xs) messageForm += `<b>Дата: </b> ${dataForm.dateMobil} \n`
		if (!screens.xs) messageForm += `<b>Дата: </b> ${dataForm.date.from} — ${dataForm.date.before}\n`
		messageForm += `<b>Время: </b> ${dataForm.time.from} — ${dataForm.time.before}\n`
		messageForm += `<b>Вес: </b> ${!dataForm.mass ? '-' : dataForm.mass}\n`
		messageForm += `<b>Надо: </b> ${!dataForm.perevoz ? '-' : dataForm.perevoz}\n`
		messageForm += `<b>+ </b> ${!dataForm.check01 ? '-' : check1}\n`
		messageForm += `<b>+ </b> ${!dataForm.check02 ? '-' : check2}\n`
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
				setCheck1('')
				setCheck2('')
			}
		})
	}
	const onFinishFailed = (errorInfo) => {
		message.error('Ошибка');
	}

	const handleChange = value => {
		console.log('value: ', value)
		if (!value) {
			setCheck1("")
			setCheck2("")
		}
		if (value === 'Перевозка мебели' || value === 'Квартирный переезд') {
			setCheck1("Грузчики")
			setCheck2("Растановка мебели")
		}
		if (value === 'Доставка грузов') {
			setCheck1("Грузчики")
			setCheck2("Поддоны")
		}
		if (value === 'Перевозка крупн. грузов') {
			setCheck1("Грузчики")
			setCheck2("Нужен кран")
		}
		if (value === 'Вывоз строительного мусора') {
			setCheck1("Уборка подьезда")
			setCheck2("")
		}
		if (value === 'Другое') {
			setCheck1("Грузчики")
			setCheck2("")
		}
	}

	const dateFormat = 'DD.MM.YYYY'

	return (
		<Form
			name="basic"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			style={{ maxWidth: '100%' }}
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

			{
				screens.xs ?
					<Form.Item
						label="Выберите число"
						name="dateMobil"
					>
						<DatePicker format={dateFormat} style={{
							width: '100%',
						}} />
					</Form.Item>
					:
					<Form.Item
						label="Выберите число"
						name="date"
					>
						<RangePicker
							format={dateFormat}
							style={{
								width: '100%',
							}}
						/>
					</Form.Item>
			}
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
			<Form.Item
				label="Вес"
				name="mass"
			>
				<Select>
					<Select.Option value="до 50">до 50кг.</Select.Option>
					<Select.Option value="свыше 50">больше 50кг.</Select.Option>
					<Select.Option value="до 100">до 100кг.</Select.Option>
					<Select.Option value="свыше100">больше 100кг.</Select.Option>
					<Select.Option value="200">200кг.</Select.Option>
					<Select.Option value="500">500кг.</Select.Option>
					<Select.Option value="1">1т.</Select.Option>
					<Select.Option value="другое">Другое.</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item
				label="Необходимо"
				name="perevoz"
			>
				<Select
					onChange={handleChange}
					allowClear
				>
					<Option value='Перевозка мебели'>Перевозка мебели</Option>
					<Option value='Квартирный переезд'>Квартирный переезд</Option>
					<Option value='Доставка грузов'>Доставить груз</Option>
					<Option value='Перевозка крупн. грузов'>Перевести крупногабаритный груз</Option>
					<Option value='Вывоз строительного мусора'>Вывести строительный мусор</Option>
					<Option value='Другое'>Другое</Option>
				</Select>
			</Form.Item>

			{check1 &&
				<Form.Item
					name='check01'
					valuePropName="checked"
					wrapperCol={{
						offset: 2,
						span: 24,
					}}
				>
					<Checkbox>{check1}</Checkbox>
				</Form.Item>
			}
			{check2 &&
				<Form.Item
					name='check02'
					valuePropName="checked"
					wrapperCol={{
						offset: 2,
						span: 24,
					}}
				>
					<Checkbox>{check2}</Checkbox>
				</Form.Item>
			}


			<Form.Item
				label="Сообщение"
				name="message"
			>
				<TextArea rows={4} />
			</Form.Item>
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





