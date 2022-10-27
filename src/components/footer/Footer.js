import React from 'react'
import css from './Footer.module.css'
import TabsComp from './tabsComp/TabsComp'
import TooltipComp from './tooltipComp/TooltipComp'
import FormSubscribe from './formSubscribe/FormSubscribe'
import SocialComp from '../socialIcon/SocialIcon'
import logo from '../header/header-address/img/logo.png'

function Footer() {
	return (
		<footer className={css.footer}>

			<section className='container'>
				<div className={css.footerBox1}>
					<TooltipComp />
				</div>
				<TabsComp />
				<div className={css.footerBox2}>

					<div>
						<SocialComp />
					</div>
					<div>
						<img src={logo} alt='Логотип компании грузоперевозка' width='100px' />
					</div>
					<div>
						<FormSubscribe />
					</div>
				</div>
				<p className={css.copirait} >Copyright © 2022 | Created & Designed By <a href='https://vi-tech.by' target='_blank' rel="noreferrer">VI:TECH</a></p>
			</section>
		</footer>
	)
}

export default Footer