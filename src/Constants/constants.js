import { Grid } from 'antd'

export const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
export const chat_id = '-1001794221917'
export const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

const { useBreakpoint } = Grid
export const useScreens = () => {
	return useBreakpoint()
}