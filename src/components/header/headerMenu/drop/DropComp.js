import { Button, Dropdown, Menu, notification, Badge } from 'antd'
import React, { useState, useContext } from 'react';
import AvatarComp from './avatar/AvatarComp'
import {
	ExclamationCircleTwoTone,
	LoginOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons'
import { Context } from '../../../../index'
import ViewComp from './avatar/viewComp/ViewComp'
import ModalComp from '../../../modal/ModalComp'
import NewAccount from '../../newAccount/NewAccount'
import { useScreens } from '../../../../Constants/constants'
import MobilMenu from '../../mobilMenu/MobilMenu'
import { observer } from "mobx-react-lite"

export const openNotification = (placement) => {
	notification.info({
		message: `Уведомление`,
		description:
			'Напоминаем, что акция продлится до конца ноября. СПЕШИТЕ!!!',
		placement,
		duration: 8,
		icon: <ExclamationCircleTwoTone twoToneColor='#f45e1e' />,
	})
}


const DropComp = observer(() => {
	const { data } = useContext(Context)
	const [open, setOpen] = useState(false)
	const [openModal, setOpenModal] = useState(false)
	const screens = useScreens()


	const toggleCollapsed = () => {
		data.setIsMobilMenu(!data.isMobilMenu)
	}

	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}
	const showModal = () => {
		setOpenModal(true)
	}
	const menu = (
		<Menu
			items={[
				{
					key: '1',
					label: (
						<span onClick={showDrawer}>
							Профиль
						</span>
					),
				},
				{
					type: 'divider',
				},
				{
					key: '2',
					label: (
						<Badge dot>
							<span
								onClick={() => openNotification('top')}
							>
								Уведомление
							</span>
						</Badge>
					),
				},
				{
					type: 'divider',
				},
				{
					key: '3',
					label: (
						<NewAccount />
					),
				},
				{
					type: 'divider',
				},
				{
					key: '4',
					label: (
						<Button onClick={showModal} >
							<LoginOutlined />
							Вход
						</Button>
					),
				},
			]}
		/>
	)

	return (
		<>
			<ModalComp openModal={openModal} setOpenModal={setOpenModal} />
			{screens.xs
				?
				<span
					onClick={toggleCollapsed}
					style={{
						position: 'absolute',
						top: '5px',
						right: '8px',
						fontSize: '2em',
						color: '#fff'
					}}
				>
					{data.isMobilMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</span>
				:
				<Dropdown overlay={menu} placement="bottomRight">
					<span
						style={{ position: 'absolute', top: '0', right: '0' }}
					>
						<AvatarComp />
					</span>
				</Dropdown>
			}
			<ViewComp
				open={open}
				onClose={onClose}
			/>
			{
				data.isMobilMenu && <MobilMenu />
			}
		</>
	)
})
export default DropComp