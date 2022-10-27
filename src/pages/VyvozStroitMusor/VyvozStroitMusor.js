import React from 'react'
import { Helmet } from "react-helmet";
import DescriptionsComp from '../../components/descriptionsComp/DescriptionsComp'
import DividerComp from '../../components/dividerComp/DividerComp'
import { content, descriptions } from '../../content/Content'
import musor from './img/musor.webp'
import css from '../PerevozMebel/PerevozMebel.module.css'

function VyvozStroitMusor() {
	return (
		<>
			<Helmet>
				<title>Вывоз строительного мусора Минск</title>
				<meta name="description" content="Заберём с квартиры или офиса строительный мусор, будет чисто и в лифте и в подьезде. НЕДОРОГО. Звоните!" />
			</Helmet>
			<section className='container'>
				<article>
					<div className='main-title'>
						<p>Оказываем услугу</p>
						<h1>Вывоз строительного мусора в Минске</h1>
					</div>


					<div className={css.mebelContent}>
						<div>
							<DescriptionsComp descriptions={descriptions.gruz} />
						</div>
						<img src={musor} alt='Вывоз мусора строительного с квартиры' />
					</div>

					<div>
						<DividerComp content={content.musor} />
					</div>
				</article>
			</section>
		</>
	)
}

export default VyvozStroitMusor