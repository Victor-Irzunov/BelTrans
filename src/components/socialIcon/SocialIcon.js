import {
	InstagramOutlined,
	YoutubeOutlined,
} from '@ant-design/icons'
import { Tag } from 'antd'
import React from 'react'
import Svg from './img/Svg.js'

const SocialComp = () => (
	<>
		<Tag icon={<InstagramOutlined />} color="#e1306c">
			Instagram
		</Tag>
		<Tag icon={<Svg />}
			color="transparent"
			style={{ marginLeft: '.6em' }}
		>
		</Tag>
		<Tag icon={<YoutubeOutlined />} color="#cd201f">
			Youtube
		</Tag>
	</>
);
export default SocialComp


