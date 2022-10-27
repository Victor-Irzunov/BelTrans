
import { Tabs } from 'antd'
import React from 'react'
import { dataFooter } from '../../../content/Content'


const TabsComp = () => (
	<Tabs
		defaultActiveKey="1"
		style={{paddingBottom: '4em', paddingTop: '1em'}}
		items={dataFooter.map((el) => {
			return {
				label: (
					<span>
						{el.icon}
						{el.title}
					</span>
				),
				key: el.id,
				children: (
					<div style={{ height:'3em'}}>
						{el.text}
						&nbsp;
						&nbsp;
						{el.add}
					</div>
				),
			}
		})}
	/>
)
export default TabsComp