import axios from "axios"
import { chat_id, uri_api } from '../Constants/constants'

export const request = (data) => axios.post(uri_api, {
	chat_id,
	parse_mode: 'html',
	text: data,
})