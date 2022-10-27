import { AutoComplete } from 'antd'
import React, { useState} from 'react'
const { Option } = AutoComplete



const AutoCompleteComp = ({ value, onChange }) => {
	const [result, setResult] = useState([])
	

	const handleSearch = (value) => {
		let res = []
		if (!value || value.indexOf('@') >= 0) {
			res = []
		} else {
			res = ['gmail.com', 'tut.by', 'yandex.by', 'mail.ru'].map((domain) => `${value}@${domain}`)
		}
		setResult(res)
	}
	


	return (
		<AutoComplete
			onSearch={handleSearch}
			placeholder="exemple@gmail.com"
			value={value} onChange={onChange}
		>
			{result.map((email) => (
				<Option key={email} value={email}>
					{email}
				</Option>
			))}
		</AutoComplete>
	)
}
export default AutoCompleteComp