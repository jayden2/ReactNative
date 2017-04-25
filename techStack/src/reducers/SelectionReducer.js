export default (state, action) => {
	switch (action.type) {
		case 'SELECT_LIBRARY':
			return action
		
		default:
			return state
	}
}