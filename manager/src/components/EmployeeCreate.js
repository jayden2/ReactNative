import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreator } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
	createEmployeeButton() {
		const { name, phone, shift } = this.props

		this.props.employeeCreator({ name, phone, shift: shift || 'Monday' })
	}
	
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props}  />
				<CardSection>
					<Button onPress={this.createEmployeeButton.bind(this)}>
						Create
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreator })(EmployeeCreate)
