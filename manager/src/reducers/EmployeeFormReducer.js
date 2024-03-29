import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE_SUCCESS } from '../actions/constants'

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			//action.payload === {prop: 'name', value: 'jimmy' }
			return { ...state, [action.payload.prop]: action.payload.value }

		case EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE_SUCCESS:
			return { ...state, ...INITIAL_STATE }

		default:
			return state
	}
}