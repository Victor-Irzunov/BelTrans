import React from 'react'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import css from '../Footer.module.css'

const TooltipComp = () => {
	return (
		<>
			<Tooltip title="Рабочий телефон">
				<div className={css.footerBtn}>
					<Button
						type="primary"
						shape="circle"
						icon={<PhoneOutlined />}
						size="large"
						href='tel:+375290000000'
					/>
					<a href='tel:+375290000000'>+37529 000-00-00</a>
				</div>
			</Tooltip>
			<Tooltip title="Рабочая почта">
				<div className={css.footerBtn}>
					<Button
						type="primary"
						shape="circle"
						icon={<MailOutlined />}
						size="large"
						href='mailto:exemple@gmail.com'
					/>
					<a href='mailto:exemple@gmail.com'>exemple@gmail.com</a>
				</div>
			</Tooltip>
			<Tooltip title="Наш адрес">
				<div className={css.footerBtn}>
					<Button
						type="primary"
						shape="circle"
						size="large"
						icon={<EnvironmentOutlined />}
						href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0+105,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9300359,27.5970416,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcf0e07fcb32d:0x1d7462d83dcb1414!8m2!3d53.9300328!4d27.5992303"
						target="_blank"
					/>
					<a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0+105,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9300359,27.5970416,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcf0e07fcb32d:0x1d7462d83dcb1414!8m2!3d53.9300328!4d27.5992303" target="_blank" rel="noreferrer"><span>г. Минск, ул. Калинина 105</span></a>
				</div>
			</Tooltip>
		</>
	)
}

export default TooltipComp