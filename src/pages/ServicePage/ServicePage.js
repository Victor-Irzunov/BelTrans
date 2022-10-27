import React from 'react'
import { Helmet } from "react-helmet";
import CardComp from '../../components/cardComp/CardComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content } from '../../content/Content'

import { Divider, Tag, Row, Col } from 'antd'
// import { useScreens } from '../../Constants/constants'



function ServicePage() {
	// const screens = useScreens()
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
				<title>Услуги грузоперевозок в Минске</title>
				<meta name="description" content="Оказываем полный спектр услуг по перевозке любых грузов,  есть грузчики. НЕДОРОГО. Звоните!" />
			</Helmet>

			<section>
				<div className='container'>
					<article>
						<div className='main-title'>
							<p>Предлагаем</p>
							<h1>Услуги грузоперевозок в Минске</h1>
						</div>


						
								<CardComp />
							
							

								<DividerComp content={content.uslugi} />
						
					</article>
				</div>
			</section>
		</>
	)
}

export default ServicePage