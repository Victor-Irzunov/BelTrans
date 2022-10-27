import React, { useState, } from 'react'
import { Helmet } from "react-helmet"
import CarouselSlider from '../../components/carousel/CarouselSlider'
import css from './MainPage.module.css'
import avto2 from './img/avto-2.png'
import avto from './img/avto.png'
import ProgressBar from '../../components/progressBar/ProgressBar'
import FormOrder from '../../components/formOrder/FormOrder'
import CollapseComp from '../../components/collapseComp/CollapseComp'
import StepComp from '../../components/stepComp/StepComp'
import { Divider, Tag, Row, Col } from 'antd'
import { useScreens } from '../../Constants/constants'

function MainPage() {
	const [isActive, setIsActive] = useState(false)
	const screens = useScreens()
	return (
		<>
			{/* Current break point:{' '}
			{Object.entries(screens)
				.filter((screen) => !!screen[1])
				.map((screen) => (
					<Tag color="blue" key={screen[0]}>
						{screen[0]}
					</Tag>
				))} */}
			<Helmet>
				<title>Грузоперевозки Минск | Беларусь</title>
				<meta name="description" content="Переезём любой груз, мебель, строительный мусор, есть грузчики, НЕДОРОГО, Машина будет через 30 мин, Звоните!" />
			</Helmet>

			<section className={css.main} id='1'>
				<div className='container'>

					<Row>
						<Col lg={24}>
							<Row
								// gutter={{ xs: 8, sm: 32, md: 24, lg: 32 }}
								style={{ marginTop: '2em' }}
								gutter={[32, 32]}
							>
								<Col xs={24} sm={24} md={13}>
									<CarouselSlider />
								</Col>
								<Col xs={15} sm={18} md={8}>
									<ProgressBar />
								</Col>
							</Row>
						</Col>

						<Col lg={24}>
							<article>
								{/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> */}
								<div className='main-title'>
									<p>Оказываем услугу</p>
									<h1 id='2'>Грузоперевозки в Минске</h1>
								</div>


								<div className={css.mainBox2}>
									<div
										onClick={() => setIsActive(true)}
									>
										<p>Закажите машину</p>
										<FormOrder />
									</div>
									<div
										onClick={() => setIsActive(i => !i)}
									>
										{isActive ?
											<img src={avto} alt='Микраавтобус грузоперевозки' />
											:
											<img src={avto2} alt='Микраавтобус грузоперевозки' />
										}
									</div>
								</div>
								<div className={css.mainBox3} id='3'>
									<div className={css.stepMain}>
										<Divider orientation="left">
											<h3>Перевозка за 3 простых шага</h3>
										</Divider>
										<StepComp />
									</div>
									<div className={css.faq} id='4'>
										{screens.xs ?
											<h3>Часто задаваемые вопросы по грузоперевозке</h3>
											:
											<Divider orientation="left">
												<h3>Часто задаваемые вопросы по грузоперевозке</h3>
											</Divider>
										}

										<CollapseComp />
									</div>
								</div>
								{/* </Row> */}
							</article>

						</Col>
					</Row>
				</div>
			</section >
		</>
	)
}

export default MainPage
