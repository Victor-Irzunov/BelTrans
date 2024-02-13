import { Card, Badge } from 'antd';
import { Link } from 'react-router-dom'
import React from 'react';
import { card } from '../../content/Content'
import { Row, Col } from 'antd'

const { Meta } = Card

const CardComp = () => {

	return (
		<Row
			gutter={[16, 16]}
			justify='center'

		>

			{card.map(el => {
				return (
					<div>
						{el.id === 3
							? <Col xs={24}>
								<Link to={el.url} key={el.id}>
									<Badge.Ribbon text="Акция" color="volcano">
										<Card
											hoverable
											style={{ width: 300 }}
											// key={el.id}
											cover={<img alt={el.title} src={el.image} />}
										>
											<Meta title={el.title} description={el.description} />
										</Card>
									</Badge.Ribbon>
								</Link>
							</Col>
							:
							<Col xs={24}>
								<Link to={el.url} key={el.id}>
									<Card
										hoverable
										style={{ width: 300 }}
										// key={el.id}
										cover={<img alt={el.title} src={el.image} />}
									>
										<Meta title={el.title} description={el.description} />
									</Card>
								</Link>
							</Col>
						}
					</div>
				)
			})}
		</Row>
	)
}
export default CardComp;