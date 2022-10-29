import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React from 'react'
// import { useScreens } from '../../../Constants/constants'


const AvatarComp = () => {
	// const screens = useScreens()
	return (

		<>
			<span>
				<Badge dot>
				
							<Avatar icon={<UserOutlined color='orange' />} />
				</Badge>
			</span>
		</>
	)
}
export default AvatarComp