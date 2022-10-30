import { Collapse } from 'antd'
import React from 'react'
import BtnComp from '../btn/BtnComp'
const { Panel } = Collapse


const textContact = [
	{
		title: 'Перейти в чат телеграмма',
		text: (
			<p
				style={{
					paddingLeft: 24,
				}}
			>
				Нажмите <a href='' target='_blanck'>здесь</a> и Вы будете перенаправлены в чат телеграмма.
			</p>
		),
		id: 1,
	},
	{
		title: 'Написать сообщение',
		text: (
			<p
				style={{
					paddingLeft: 24,
				}}
			>
				Нажмите <BtnComp total='здесь' /> чтобы заполнить форму для отправки сообщения.
			</p>
		),
		id: 2,
	},
	{
		title: 'Оставте свой номер телефона и мы Вам перезвоним',
		text: (
			<p
				style={{
					paddingLeft: 24,
				}}
			>
				Нажмите <BtnComp total='здесь' /> и напишите в форме свой телефон.
			</p>
		),
		id: 3,
	},
]


const CollapseContactComp = () => {

	return (
		<Collapse bordered={false}>
			<Panel header="Перейти в чат телеграмма" key="1">
				<p style={{paddingLeft: 24,}}>
					Нажмите <BtnComp total='здесь' href='https://web.telegram.org/z/#213696448' target='_blanck' /> и Вы будете перенаправлены в чат телеграмма.
				</p>
			</Panel>
			<Panel header="Написать сообщение" key="2">
				<p style={{paddingLeft: 24,}}>
					Нажмите <BtnComp total='здесь' /> чтобы заполнить форму для отправки сообщения.
				</p>
			</Panel>
			<Panel header="Оставте свой номер телефона и мы Вам перезвоним" key="3">
			<p style={{paddingLeft: 24,}}>
				Нажмите <BtnComp total='здесь' /> и напишите в форме свой телефон.
			</p>
			</Panel>
		</Collapse>
	)
}



export default CollapseContactComp