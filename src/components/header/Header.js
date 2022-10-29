import HeaderMenu from './headerMenu/HeaderMenu'
import { Affix } from 'antd'
import React from 'react'
import HeaderAddress from './header-address/HeaderAddress'
import css from './Header.module.css'
// import { useScreens } from '../../Constants/constants'

function Header() {
	// const screens = useScreens()
	return (
		<>
			<HeaderAddress />
			<Affix
				offsetTop={0}
			>
						<header className={css.header}>
							<div className='container'>
								<nav>
									<HeaderMenu />
								</nav>
							</div>
						</header>
			</Affix>
		</>
	)
}

export default Header