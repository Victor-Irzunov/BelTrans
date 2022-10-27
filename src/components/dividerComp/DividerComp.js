import { Divider } from 'antd';
import React from 'react';
import ListComp from '../listComp/ListComp';
import { useScreens } from '../../Constants/constants'


const DividerComp = ({ content }) => {
	const screens = useScreens()

	return (
		<div style={{ marginTop: '5em', paddingBottom: '5em' }}>
			{screens.xs ?
				<h2 style={{ textTransform: 'uppercase' }}>{content.title}</h2>
				:
				<Divider orientation="left">
					<h2 style={{ textTransform: 'uppercase' }}>{content.title}</h2>
				</Divider>
			}

			<p style={{ fontSize: '1.3em', lineHeight: '1.2' }}>
				{content.text}
			</p>
			<h3 style={{ fontSize: '1.5em' }}>{content.title2}</h3>
			{content.text2 === typeof String ?
				<p style={{ fontSize: '1.3em', lineHeight: '1.2' }}>
					{content.text2}
				</p>
				:
				<ListComp data={content} />
			}
		</div>
	)
}
export default DividerComp;