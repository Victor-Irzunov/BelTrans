import React from 'react'
import { Helmet } from "react-helmet"
import { Row, Col, Button, Image } from 'antd'
import DescriptionsContactComp from '../../components/descriptionsContact/DescriptionsContactComp'
import DescriptionsContactUnnComp from '../../components/descriptionsContact/DescriptionsContactUnnComp'
import CollapseContactComp from '../../components/collapseContactComp/CollapseContactComp'
import contact from './img/contact.webp'


function ContactPage() {

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


					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 100 }} >
						<Col xl={{ span: 6, offset: 1 }} style={{ background: '#f7f7f7', padding: '20px 30px', borderRadius: '10px' }}>
							<DescriptionsContactComp />
							<Button type="primary" size='large'>Быстрый заказ</Button>
						</Col>
						<Col xl={17}>
							<Row gutter={[32, 32]}>
								<Col xl={23} style={{ background: '#f7f7f7',  padding: '20px 30px', borderRadius: '10px' }}>
									<DescriptionsContactUnnComp />
								</Col>
								<Col xl={23} style={{ margin: '0 auto' }}>
									<Image
										width={350}
										src={contact}
										style={{ borderRadius: '10px' }}
									/>
								</Col>
								<Col xl={23} style={{ padding: '20px 30px', borderRadius: '10px' }}>
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