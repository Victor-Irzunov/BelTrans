import { items } from '../../../content/Content'
import { Menu } from 'antd'
import React, { useState } from 'react'


const MobilMenu = () => {
	const [theme, setTheme] = useState('dark')
	const [current, setCurrent] = useState('1')
	const onClick = (e) => {
		setCurrent(e.key)
	}
	return (
		<span style={{ position: 'absolute', top: '70', left: '0', zIndex: '100000' }}>

			<Menu
				theme={theme}
				onClick={onClick}
				style={{
					width: 300,
					background: '#33424F',
				}}
				defaultOpenKeys={['sub1']}
				selectedKeys={[current]}
				mode="inline"
				items={items}
			/>
		</span>
	)
}
export default MobilMenu