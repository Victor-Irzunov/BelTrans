import React from 'react'
import logo from './img/logo.png'
import css from './HeaderAddress.module.css'
import AnchorComp from '../../anchorComp/AnchorComp'
import { useLocation } from 'react-router-dom'
import NotificationComp from '../../notificationBox/NotificationComp'
import { Col, Row } from 'antd';
import { PhoneFilled,PhoneOutlined } from '@ant-design/icons'


function HeaderAddress() {

	const location = useLocation()
	let isPath = location.pathname === '/'


	return (
		<section className={css.headerAddress}>
			{isPath && < AnchorComp />}
			<div className='container'>
				<Row
					gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
					align='middle'
				>
					<Col xs={{ span: 10, order: 1 }} sm={{ span: 8, order: 1 }} md={5} lg={6} xl={7}>
						<img src={logo} alt='Логотип грузоперевозка' width='100px' />
					</Col>
					<Col xs={{ span: 24, order: 3 }} sm={{ span: 24, order: 3 }} md={{ span: 11, order: 2 }} lg={10} xl={9}>
						<address>
							<Row justify='space-between' >
								<Col xl={12}>
									<p>
										Пн-Сб 8:00-20:00 <span className={css.sunday}>Вс</span>
									</p>
								</Col>
								<Col xl={12}>
									<p className={css.ipDel}>
										ИП "Беларус А.С."
									</p>

								</Col>

								<Col xl={12}>
									<p>
										г. Минск ул. Калинина 105
									</p>
								</Col>
								<Col xl={12}>
									<p>УНП:&nbsp;
										<span>
											600500650
										</span>
									</p>

								</Col>
							</Row>
						</address>
					</Col>
					<Col xs={{ span: 14, order: 2 }} sm={{ span: 16, order: 2 }} md={{ span: 8, order: 3 }} lg={8} xl={8}>
						<Row align='middle'>
							<Col xs={4} sm={14} md={24} lg={24} xl={14}>

								<a className={css.headerPhone} href='tel:+375290000000'>+37529 333-33-33</a>
								<a className={css.headerPhone2} href='tel:+375290000000'><PhoneFilled /></a>
							</Col>

							<Col xs={20} sm={10} md={24} lg={24} xl={10}>
								<NotificationComp text={'Вам перезвонить?'} type={'text'} icon={<PhoneOutlined />} />
							</Col>
						</Row>
					</Col>
				</Row>
			</div >
		</section >
	)
}

export default HeaderAddress