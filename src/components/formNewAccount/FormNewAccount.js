import {
	Col,
	DatePicker,
	Form,
	Input,
	Row,
	Select,
	Switch,
	message,
	Button,
	Alert,
	AutoComplete,
	InputNumber
} from 'antd'
import React, { useState } from 'react'
import moment from 'moment'
import UploadComp from '../uploadComp/UploadComp'

const { Option } = Select



const FormNewAccount = () => {
	const [form] = Form.useForm()
	const [isAlert, setIsAlert] = useState(false)
	const [autoCompleteResult, setAutoCompleteResult] = useState([]);

	const onWebsiteChange = (value) => {
		if (!value) {
			setAutoCompleteResult([]);
		} else {
			setAutoCompleteResult(['@gmail.com', '@tut.by', '@yandex.by', '@mail.ru'].map((domain) => `${value}${domain}`));
		}
	};
	const websiteOptions = autoCompleteResult.map((website) => ({
		label: website,
		value: website,
	}));

	const onFinish = (values) => {
		console.log('values: ', values)
		message.warning('Регистрация невозможна')
		setIsAlert(true)
		setTimeout(() => { form.resetFields() }, [1000])
	}

	const onFinishFailed = (errorInfo) => message.error('Ошибка')

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 100,
				}}
			>
				<Option value="37529">+375 29</Option>
				<Option value="37533">+375 33</Option>
				<Option value="37544">+375 44</Option>
				<Option value="37525">+375 25</Option>
			</Select>
		</Form.Item>
	);

	return (
		<>
			<Form
				layout="vertical"
				// hideRequiredMark
				name="NewAccount"
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				initialValues={{
					prefix: '+37529',
				}}
				style={{ overflowX: 'hidden' }}
			>
				<Row
					gutter={{
						xs: 4,
						sm: 8,
						md: 16,
						lg: 24,
					}}
				// gutter={[8, 8]}
				>
					<Col xs={24} lg={12}>
						<Form.Item
							label="Логин"
							name="login"
							tooltip="Обязательное поле"
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите почту!',
								},
								{
									type: 'email',
									message: 'Введите корректный email!',
								},
							]}
						>
							<AutoComplete
								options={websiteOptions}
								onChange={onWebsiteChange}
								placeholder="exemple@gmail.com"
							/>
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							label="Пароль"
							name="password"
							tooltip="Обязательное поле"
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите пароль!',
								},
							]}
						>
							<Input.Password />
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="confirm"
							label="Повторите пароль"
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Пожалуйста повторите пароль!',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}
										return Promise.reject(new Error('Пароли не совпадают!'));
									},
								}),
							]}
						>
							<Input.Password />
						</Form.Item>

					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="name"
							label="Имя"
							hasFeedback
						>
							<Input placeholder="Иван" />
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="surname"
							label="Фамилия"
							hasFeedback

						>
							<Input placeholder="Иванов" />
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="date"
							label="Дата рождения"
							hasFeedback
						>
							<DatePicker
								format="DD/MM/YYYY HH:mm:ss"
								showTime={{
									defaultValue: moment('00:00:00', 'HH:mm:ss'),
								}}
							/>
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="city"
							label="Страна/Город"
							hasFeedback
						>
							<Select
								defaultValue="Беларусь"
								style={{
									width: '39%',
									marginRight: '1%'
								}}
							>
								<Option value="BY">Беларусь</Option>
								<Option value="RU">Россия</Option>
								<Option value="another">Другая</Option>
							</Select>
							<Input
								style={{
									width: '60%',
								}}
								defaultValue=""
							/>
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="address"
							label="Адрес"
							hasFeedback
						>
							<Input.Group size="middle">
								<Row gutter={4}>
									<Col span={12}>
										<Input placeholder="Улица" />
									</Col>
									<Col span={4}>
										<InputNumber min={1} placeholder="Дом" />
									</Col>
									<Col span={4}>
										<InputNumber min={1}  placeholder="Кв." />
									</Col>
								</Row>
							</Input.Group>
						</Form.Item>
					</Col>
					<Col xs={24} lg={12}>
						<Form.Item
							name="tel"
							label="Телефон"
						>
							<InputNumber
								placeholder="3333333"
								addonBefore={prefixSelector}
								
								style={{
									width: '100%',
								}}
							/>
						</Form.Item>
					</Col>
					<Col xs={12} lg={6}>
						<Form.Item
							name="avatar"
							label="Аватар"
						>
							<UploadComp />
						</Form.Item>
					</Col>
					<Col xs={6} lg={6}>
						<Form.Item
							name="pol"
							label='Пол'
						>
							<Switch
								checkedChildren="Мужской"
								unCheckedChildren="Женский"
								defaultChecked />
						</Form.Item>
					</Col>

					<Col xs={24} lg={24}>
						<Form.Item
						>
							<Button
								type="primary"
								htmlType="submit"
								onClick={onFinish}
								size='large'
							>
								Регистрация
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
			{
				isAlert && <Alert
					message="Регистрация верменно невозможна!"
					description="Сайт пока никому не принадлежит. Приносим свои извиненеия за доставленые неудобства."
					type="warning"
					showIcon
					closable
				/>
			}
		</>
	)
}

export default FormNewAccount