import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Button } from './common'

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value })
		})
	}

	saveChangesButton() {
		const { name, phone, shift } = this.props
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props}  />
				<CardSection>
					<Button onPress={this.saveChangesButton.bind(this)}>
						Save Changes
					</Button>
					<Button>
						Delete
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm
	return { name, phone, shift }
}

export default connect(null, { employeeUpdate })(EmployeeEdit)