import { Col, Divider, Drawer, Row, Button, Empty, } from 'antd'
import React, { useState } from 'react';
import { LoginOutlined } from '@ant-design/icons'
import ModalComp from '../../../../../modal/ModalComp'
import { useScreens } from '../../../../../../Constants/constants'



const DescriptionItem = ({ title, content }) => (
	<div className="site-description-item-profile-wrapper" style={{ marginBottom: '2em' }}>
		<p className="site-description-item-profile-p-label">{title}:</p>
		{content}
	</div>
)
const ViewComp = ({ open, onClose }) => {
	const [openModal, setOpenModal] = useState(false)
	const screens = useScreens()

	const showModal = () => {
		setOpenModal(true)
	}

	return (
		<>
			<ModalComp openModal={openModal} setOpenModal={setOpenModal} />
			<Drawer
				width={!screens.sm ? 400 : 600}
				placement="left"
				onClose={onClose}
				open={open}
			>
				<p
					className="site-description-item-profile-p"
					style={{
						marginBottom: 24,
						fontWeight: '700',
						fontSize: '1.5em'
					}}
				>
					Ваш профиль
				</p>
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
				<p className="site-description-item-profile-p">Персональные данные</p>
				<Row>
					<Col span={12}>
						<DescriptionItem title="Полное имя" content="... ..." />
					</Col>
					<Col span={12}>
						<DescriptionItem title="Аккаунт" content="..." />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<DescriptionItem title="Город" content="..." />
					</Col>
					<Col span={12}>
						<DescriptionItem title="Страна" content="🇧🇾" />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<DescriptionItem title="Дата рождения" content="..." />
					</Col>
					<Col span={12}>
						<DescriptionItem title="Пол" content="м/ж" />
					</Col>
				</Row>

				<Divider />
				<p className="site-description-item-profile-p">Заказы</p>
				<Row>
					<Col span={12}>
						<DescriptionItem title="Число" content=".." />
					</Col>
					<Col span={12}>
						<DescriptionItem title="Информация о заказе" content=".." />
					</Col>
				</Row>
				<Divider />
				<p className="site-description-item-profile-p">Контакты</p>
				<Row>
					<Col span={12}>
						<DescriptionItem title="Email" content="..." />
					</Col>
					<Col span={12}>
						<DescriptionItem title="Телефон" content="+375 .. ... .. .." />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<DescriptionItem
							title="Адрес"
							content='...'
						/>
					</Col>
				</Row>

				<Button onClick={showModal}><LoginOutlined />Вход</Button>
			</Drawer>
		</>
	)
}
export default ViewComp