import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons'
import { Avatar, Comment, Tooltip, Rate } from 'antd'
import React, { createElement, useState } from 'react'
import InputComents from '../../components/inputComment/InputComents'
import moment from 'moment'
import { Helmet } from "react-helmet"
import {user} from '../../content/Content'

const OtzyvPage = () => {
	const [likes, setLikes] = useState(13)
	const [dislikes, setDislikes] = useState(0)
	const [action, setAction] = useState(null)

	const like = () => {
		setLikes(prev=> prev + 1)
		setDislikes(0)
		setAction('liked')
	}

	const dislike = () => {
		setLikes(0)
		setDislikes(1)
		setAction('disliked')
	}

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={dislike}>
				{React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
				<span className="comment-action">{dislikes}</span>
			</span>
		</Tooltip>,
		<span key="comment-basic-reply-to"><Rate allowHalf defaultValue={4.5} /></span>,
	]


	return (
		<>
			<Helmet>
				<title>Грузоперевозки отзывы Минск | Беларусь</title>
				<meta name="description" content="Перевозим любой груз, вот, что говорят о нас наши клиенты." />
			</Helmet>

			<section className='container'>
				<article>
					<div className='main-title'>
						<p>наши отзывы</p>
						<h1>Что клиенты говоря о нас</h1>
					</div>
					{
						user.map(el => {
							return (
								<Comment
									actions={actions}
									key={el.id}
									author={<span>{el.user}</span>}
									avatar={<Avatar src={`https://joeschmoe.io/api/v1/${el.nik}`} alt="Отзыв клиента" />}
									content={
										<p>
											{el.text}
										</p>
									}
									datetime={
										<Tooltip title={el.date}>
											<span>{moment(el.date).fromNow()}</span>
										</Tooltip>
									}
								/>
							)
						})
					}
					
					<InputComents />
				</article>
			</section>
		</>
	)
}
export default OtzyvPage