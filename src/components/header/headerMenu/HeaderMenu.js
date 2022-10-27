
import { Menu } from 'antd';
import React, { useState } from 'react';
import DropComp from './drop/DropComp'
import { items, itemsMobil } from '../../../content/Content'
import { useScreens } from '../../../Constants/constants';


const HeaderMenu = () => {
	const [current, setCurrent] = useState('main')
	const screens = useScreens()
	const onClick = (e) => {
		setCurrent(e.key)
	}
	return (
		<div
			style={{ position: 'relative' }}
		>
			<Menu
				onClick={onClick}
				selectedKeys={[current]}
				mode="horizontal"
				items={screens.xs ? itemsMobil : items}
				style={{
					background: 'transparent',
					color: '#fff',
				}}
			/>

			<DropComp />
		</div>
	)
}
export default HeaderMenu