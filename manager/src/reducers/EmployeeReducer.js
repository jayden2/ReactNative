import { EMPLOYEES_FETCH_SUCCESS } from '../actions/constants'

const INTIIAL_STATE = {}

export default (state = INTIIAL_STATE, action) => {
	switch (action.state) {
		case EMPLOYEES_FETCH_SUCCESS:
			return state
		default:
			return state
	}
}