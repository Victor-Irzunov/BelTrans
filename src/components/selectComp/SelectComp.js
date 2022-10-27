import { Select, Tag } from 'antd'
import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../../index'

const options = [
	{
		value: 'Перевозка'
	},
	{
		value: 'Грузчики',
	},
	{
		value: 'Юр.лицо+10%',
	},
]

const tagRender = (props) => {
	const { label, closable, onClose } = props
	const onPreventMouseDown = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};
	return (
		<Tag
			color="orange"
			onMouseDown={onPreventMouseDown}
			closable={closable}
			onClose={onClose}
			style={{
				marginRight: 3,
			}}
		>
			{label}
		</Tag>
	)
}

const SelectComp = observer(({ keyId }) => {
	const { data } = useContext(Context)
	const handleChange = (value) => {
		data.setData({ value, key: keyId })

	};
	return (
		<Select
			mode="multiple"
			onChange={handleChange}
			showArrow
			tagRender={tagRender}
			defaultValue={['Перевозка']}
			style={{
				width: '100%',
			}}
			options={options}
		/>
	)
})
export default SelectComp