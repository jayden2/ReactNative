import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
	render() {
		const { name, phone, shift } = this.props

		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jimmy"
						value={name}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-555"
						value={phone}
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone shift } = state.employeeForm

	return { name, phone, shift }
}

export default connect(null, { employeeUpdate })(EmployeeCreate)
