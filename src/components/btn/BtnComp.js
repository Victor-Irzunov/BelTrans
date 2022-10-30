import React from 'react'
import { Button } from 'antd'

const BtnComp = ({ total, href, target }) => {
	return (
		<Button href={href} target={target}>{total}</Button>
	)
}
export default BtnComp
