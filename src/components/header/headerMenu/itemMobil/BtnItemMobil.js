import React, { useState } from 'react'
import ModalComp from '../../../modal/ModalComp'
import { Button, } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

function BtnItemMobil() {
	const [openModal, setOpenModal] = useState(false)
	const showModal = () => {
		setOpenModal(true)
	}
	return (
		<>
			<ModalComp openModal={openModal} setOpenModal={setOpenModal} />
			<Button
				onClick={showModal}
			>
				<LoginOutlined />
				Вход
			</Button>
		</>
	)
}

export default BtnItemMobil