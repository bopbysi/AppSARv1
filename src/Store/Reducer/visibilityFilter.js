import { SET_VISIBILITY_FILTER } from '../../Constants/SupportActionsTypes'
import { SHOW_ALL } from '../../Constants/SupportFilters'

const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter