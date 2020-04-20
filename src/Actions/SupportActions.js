import * as types from '../Constants/SupportActionsTypes'

export const addSupport = (text, cat = 'default') => ({
	type: types.ADD_SUPPORT,
	text,
	cat,
})
export const editSupportCat = (id, cat) => ({
	type: types.EDIT_SUPPORT_CAT,
	id,
	cat
})
export const setVisibilityFilter = (filter) => ({
	type: types.SET_VISIBILITY_FILTER,
    filter
})    