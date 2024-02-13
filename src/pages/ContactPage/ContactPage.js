import React from 'react'
import { Helmet } from "react-helmet"
import { Row, Col, Image } from 'antd'
import DescriptionsContactComp from '../../components/descriptionsContact/DescriptionsContactComp'
import DescriptionsContactUnnComp from '../../components/descriptionsContact/DescriptionsContactUnnComp'
import CollapseContactComp from '../../components/collapseContactComp/CollapseContactComp'
import contact from './img/contact.webp'
import { useScreens } from '../../Constants/constants'
import NotificationComp from '../../components/notificationBox/NotificationComp'



function ContactPage() {
	const screens = useScreens()
	const DivBox = (props) => <div className={`height-${props.value}`} style={{ paddingTop: '1em' }}>{props.children}</div>

	return (
		<>
			<Helmet>
				<title>Грузоперевозки Контакты</title>
				<meta name="description" content="Компания «БЕЛ-ТРАНС» оказывает услуги по грузоперевозки по Минску и Беларуси" />
			</Helmet>
			<section style={{ paddingBottom: '5em' }}>
				<article className='container'>
					<div className='main-title' style={{ marginBottom: '7em' }}>
						<p>Инфо</p>
						<h1>Контакты</h1>
					</div>

					<Row
						gutter={screens.xl ? { xl: 100 } : [24, 24]}
						justify='center'
					>
						<Col xs={20} xl={{ span: 6, offset: 1 }} style={{ background: '#f7f7f7', paddingTop: '1.5em', paddingBottom: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
							<DescriptionsContactComp />
							<NotificationComp text={'Быстрый заказ'} type={'primary'}  />
						</Col>
						<Col xs={20} xl={17}>
							<Row gutter={[32, 32]}>
								<Col xl={23} style={{ background: '#f7f7f7', paddingTop: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
									<DescriptionsContactUnnComp />
								</Col>
								<Col xl={24}>
									<Image
										width={350}
										src={contact}
										style={{ borderRadius: '5px' }}
									/>
								</Col>
								<Col xl={23} style={{ paddingTop: '1.5em', paddingLeft: '2em', borderRadius: '10px' }}>
									<DivBox >
										<p style={{ fontSize: '2.2em', }}>Остались вопросы?</p>
										<p style={{ fontSize: '1.3em', }}>Выберите удобный способ связи.</p>
										<CollapseContactComp />
									</DivBox>
								</Col>
							</Row>


						</Col>
					</Row>


				</article>
			</section>
		</>
	)
}

export default ContactPage