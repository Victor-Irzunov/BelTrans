import React from 'react'
import { Helmet } from "react-helmet";
import DescriptionsComp from '../../components/descriptionsComp/DescriptionsComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content, descriptions } from '../../content/Content'
import krupnGruz from './img/krupn-gruz.webp'
import css from '../PerevozMebel/PerevozMebel.module.css'

function PerevozkaKrupnGruz() {
	return (
		<>
			<Helmet>
				<title>Перевозка крупногабаритных грузов Минск</title>
				<meta name="description" content="Перевезём любой крупногабаритный груз. НЕДОРОГО. Звоните!" />
			</Helmet>
			<section className='container'>
				<article>
					<div className='main-title'>
						<p>Оказываем услугу</p>
						<h1>Перевозка крупногабаритных грузов по Минску</h1>
					</div>

					<div className={css.mebelContent}>
						<div>
							<DescriptionsComp descriptions={descriptions.gruz} />
						</div>
						<img src={krupnGruz} alt='Перевозка мебели с квартиры' />
					</div>

					<div>
						<DividerComp content={content.krupnGruz} />
					</div>
				</article>
			</section>
		</>
	)
}

export default PerevozkaKrupnGruz