import {
	Drawer,
	// Grid,
} from 'antd'

import React, { useState } from 'react'
import FormNewAccount from '../../formNewAccount/FormNewAccount'

// const { useBreakpoint } = Grid
import { useScreens } from '../../../Constants/constants'

const NewAccount = () => {
	const [open, setOpen] = useState(false)
	const screens = useScreens()
	const showDrawer = () => {
		setOpen(true)
	};
	const onClose = () => {
		setOpen(false)
	}

	return (
		<>
			<span
				type="text"
				onClick={showDrawer}
			>
				Новый аккаунт
			</span>

			<Drawer
				title="Создать новый аккаунт"
				size={screens.lg && 'large'}

				onClose={onClose}
				open={open}
			>
				<FormNewAccount />
			</Drawer>
		</>
	)
}
export default NewAccount