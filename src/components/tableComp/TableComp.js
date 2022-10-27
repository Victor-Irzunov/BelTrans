import { Table, Button } from 'antd'
import React, { useState, useContext } from 'react'
import SelectComp from '../selectComp/SelectComp'
import { Context } from '../../index'
import { observer } from "mobx-react-lite"
import BtnComp from '../btn/BtnComp'
import ModalComp from '../modal/ModalComp'
import InputNumberComp from '../tableComp/inputNumberComp/InputNumberComp'
import { dataArr } from '../../content/Content'
import { useScreens } from '../../Constants/constants'

const obj = {
	title: '',
	price: null,
	info: '',
	checked: []
}

const TableComp = observer(() => {
	const { data } = useContext(Context)
	const screens = useScreens()
	const [openModal, setOpenModal] = useState(false)
	const [isBoolModal, setIsBoolModal] = useState(false)
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [keyRow, setKeyRow] = useState(-1)
	const [numInput, setNumInput] = useState(2)

	const showModal = () => {
		setOpenModal(true)
		setIsBoolModal(true)
	}
	const onSelectChange = newSelectedRowKeys => {
		setSelectedRowKeys(newSelectedRowKeys)
		const newObj = newSelectedRowKeys.map(el => {
			if (el === 0) return el = 'Перевозка мебели'
			if (el === 1) return el = 'Квартирный переезд'
			if (el === 2) return el = 'Доставка груза'
			if (el === 3) return el = 'Перевозка крупногабаритных грузов'
			if (el === 4) return el = 'Вывоз строительного мусора'
			return el
		})
		obj.checked = newObj
	}
	const rowSelection = { selectedRowKeys, onChange: onSelectChange }

	if (keyRow >= 0 && !data.data.value) {
		const elem = dataArr.find(el => el.key === keyRow)
		elem.total = elem.price * numInput
	}


	if (data.data.value) {
		let value = Object.values(data.data.value)
		let keyId = data.data.key
		const el = dataArr.find(item => item.key === keyId)
		const perevozka = value.includes('Перевозка')
		const gruzchik = value.includes('Грузчики')
		const urLico = value.includes('Юр.лицо+10%')

		if (perevozka && !gruzchik && !urLico) {
			el.total = el.price * numInput
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Перевозка'
		}
		if (perevozka && gruzchik && !urLico) {
			el.total = (el.gruzchik + el.price) * numInput
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Перевозка и грузчики'
		}
		if (!perevozka && gruzchik && !urLico) {
			el.total = el.gruzchik * numInput
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Грузчики'
		}
		if (perevozka && !gruzchik && urLico) {
			el.total = ((el.price + el.price * 10 / 100) * numInput).toFixed(2)
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Перевозка, юр.лицо'
		}
		if (!perevozka && !gruzchik && urLico) {
			el.total = 0
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Юр.лицо'
		}
		if (!perevozka && !gruzchik && !urLico) {
			el.total = 0
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'ничего'
		}
		if (!perevozka && gruzchik && urLico) {
			el.total = ((el.gruzchik + el.gruzchik * 10 / 100) * numInput).toFixed(2)
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Грузчики и юр.лиц'
		}
		if (perevozka && gruzchik && urLico) {
			el.total = (((el.price + el.price * 10 / 100) + (el.gruzchik + el.gruzchik * 10 / 100)) * numInput).toFixed(2)
			obj.title = el.usluga
			obj.price = el.total
			obj.info = 'Перевозка и грузчики и юр.лицо'
		}
	}

	const columns = [
		{
			title: 'Услуга',
			dataIndex: 'usluga',
			filters: [
				{
					text: 'Перевозка мебели',
					value: 'Перевозка мебели',
				},
				{
					text: 'Квартирный переезд',
					value: 'Квартирный переезд',
				},
				{
					text: 'Доставка груза',
					value: 'Доставка груза',
				},
				{
					text: 'Перевозка крупногабаритных грузов',
					value: 'Перевозка крупногабаритных грузов',
				},
				{
					text: 'Вывоз строительного мусора',
					value: 'Вывоз строительного мусора',
				},
			],
			filterMode: 'tree',
			filterSearch: true,
			onFilter: (value, record) => record.usluga.startsWith(value),
			width: '20%',
			fixed: 'left',
			width: 100,
		},
		{
			title: 'Стоимость перевозки (1 час) руб.',
			dataIndex: 'price',
			sorter: (a, b) => a.price - b.price,
			width: '13%',
		},
		{
			title: 'Стоимость грузчиков (1 час) руб.',
			dataIndex: 'gruzchik',
			sorter: (a, b) => a.price - b.price,
			width: '13%',
		},
		{
			title: 'Орентировочное время (мин. 2 часа)',
			dataIndex: 'time',
			render: () => (<InputNumberComp setNumInput={setNumInput} />),
			width: '13%',
		},
		Table.EXPAND_COLUMN,
		{
			title: 'Варианты для расчёта стоимости',
			dataIndex: 'key',
			render: (key) => (<SelectComp keyId={key} />),
			width: '30%',
		},
		{
			title: 'Итого сумма (руб.)',
			dataIndex: 'total',
			render: (total) => (<BtnComp total={total} />),
			width: '13%',
		},

	]

	if (screens.xs) columns.push(Table.SELECTION_COLUMN)


	return (
		<>
			<ModalComp
				openModal={openModal}
				setOpenModal={setOpenModal}
				isBoolModal={isBoolModal}
				obj={obj}
				setSelectedRowKeys={setSelectedRowKeys}
			/>
			<Table
				columns={columns}
				pagination={false}
				// size='small'
				scroll={{
					x: 1200,
				}}
				dataSource={dataArr}
				expandable={{
					expandedRowRender: (record) => (
						<p
							style={{
								margin: 0,
							}}
						>
							{record.description}
						</p>
					),

				}}
				rowSelection={rowSelection}
				onRow={(record, rowIndex) => {
					return {
						onClick: event => setKeyRow(rowIndex)
					}
				}}
			/>

			{
				selectedRowKeys.length > 0 &&
				<Button
					style={{ marginTop: '2em', marginLeft: '1.3em' }}
					type="primary"
					onClick={() => showModal()}
				>
					Заказать
				</Button>
			}

		</>
	)

})

export default TableComp