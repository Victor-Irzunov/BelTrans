import { makeAutoObservable } from 'mobx'

export default class PriceStore {
	constructor() {
		this._data = {}
		this._total = null
		this._isMobilMenu = false
		this._dataModal = {}
		this._isStepFromForm = false
		makeAutoObservable(this)
	}
	setData(data) {
		this._data = data
	}
	setTotal(data) {
		this._total = data
	}
	setDataModal(data) {
		this._dataModal = data
	}
	setIsStepFromForm(data) {
		this._isStepFromForm = data
	}
	setIsMobilMenu(data) {
		this._isMobilMenu = data
	}


	get data() {
		return this._data
	}
	get total() {
		return this._total
	}
	get dataModal() {
		return this._dataModal
	}
	get isStepFromForm() {
		return this._isStepFromForm
	}
	get isMobilMenu() {
		return this._isMobilMenu
	}
}