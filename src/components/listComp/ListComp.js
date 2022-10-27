import { Divider, List } from 'antd'
import React from 'react'
// import {content} from '../../content/Content'


const ListComp = ({ data }) => (
	<>
		<Divider orientation="left">{data.title3}</Divider>
		<List
			size="small"
			// header={<div>Header</div>}
			// footer={<div>Footer</div>}
			// bordered
			dataSource={data.text2}
			renderItem={(item) => <List.Item>{item}</List.Item>}
		/>
	</>
);
export default ListComp