import React from 'react'
import { Helmet } from "react-helmet";
import DividerComp from '../../components/dividerComp/DividerComp'
import { content } from '../../content/Content'
import TableComp from '../../components/tableComp/TableComp'

function CenyPage() {

	return (
		<>
			<Helmet>
				<title>Грузоперевозки Минск цена</title>
				<meta name="description" content="Доставка любых грузов, есть грузчики. НЕДОРОГО. Звоните!" />
			</Helmet>
			<section className='container'>
				<article>
					<div className='main-title'>
						<p>Прайс</p>
						<h1>Цены на грузоперевозки в Минске</h1>
					</div>


					<div className='' style={{ marginTop: '6em', marginBottom: '8em' }}>
						<TableComp />
					</div>

					<div>
						<DividerComp content={content.ceny} />
					</div>
				</article>
			</section>
		</>
	)
}

export default CenyPage