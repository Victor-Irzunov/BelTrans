import { Button, Modal } from 'antd'
import React from 'react'
import FormLogin from '../formLogin/FormLogin'
import FormPriceOrder from '../formPriceOrder/FormPriceOrder'


const ModalComp = ({ openModal, setOpenModal, isBoolModal, obj,setSelectedRowKeys }) => {

	return (
		<>
			<Modal
				open={openModal}
				title={isBoolModal ? 'Оформление заказа' : 'Вход'}
				// onOk={handleOk}
				onCancel={() => setOpenModal(false)}

				footer={[
					<Button key="back" onClick={() => setOpenModal(false)}>
						Выход
					</Button>,
				]}
			>
				{
					isBoolModal ?
						<>
							<div>
								{obj && obj.checked.map((el, i) => {
									return (
										<p key={i}><span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Услуга:</span>&nbsp;&nbsp; {el}</p>
									)
								})}
								{
									obj?.info &&
									<div>
										<p><span style={{ fontWeight: 'bold' }}>Информация о заказе:</span>&nbsp;&nbsp; {obj.info}</p>
										<p><span style={{ fontWeight: 'bold' }}>Сумма заказа:</span>&nbsp;&nbsp; {obj.price} руб.</p>
									</div>

								}
							</div>
							<br />
							<FormPriceOrder obj={obj} setOpenModal={setOpenModal} setSelectedRowKeys={setSelectedRowKeys} />
						</>

						:
						<FormLogin setOpenModal={setOpenModal} />
				}

			</Modal>
		</>
	)
}
export default ModalComp