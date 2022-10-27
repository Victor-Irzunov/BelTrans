import { Anchor } from 'antd'
import React from 'react'

const { Link } = Anchor


const AnchorComp = () => {


	return (
		<Anchor
			// getContainer={() => document.getElementById("my-scroll-layout")}
			// showInkInFixed={true}
			// affix={true}
			offsetTop='55'

			style={{ position: 'fixed', right: '10px', top: '500px' }}
		>
			<Link href="#1" title="Старт" />
			<Link href="#2" title="Заказ машины" />
			<Link href="#3" title="За 3 шага" />
			<Link href="#4" title="FAQ" />
		</Anchor>

	)
}
export default AnchorComp