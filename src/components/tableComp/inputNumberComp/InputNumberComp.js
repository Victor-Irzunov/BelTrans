import { InputNumber } from 'antd'
import React from 'react'

const InputNumberComp = ({ setNumInput }) => {
	const onChange = (value) => {
		setNumInput(value)
	}
	return (
		<InputNumber min={2} max={10} defaultValue={2} onChange={onChange} />
	)

}
export default InputNumberComp