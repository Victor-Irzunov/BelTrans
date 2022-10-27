import {
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import React from 'react';
const SocialComp = () => (
	<>
		<Tag icon={<InstagramOutlined />} color="#e1306c">
		Instagram
		</Tag>
		<Tag icon={<FacebookOutlined />} color="#3b5999">
			Facebook
		</Tag>
		<Tag icon={<YoutubeOutlined />} color="#cd201f">
			Youtube
		</Tag>
	</>
);
export default SocialComp