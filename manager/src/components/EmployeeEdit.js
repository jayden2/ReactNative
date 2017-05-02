import _ from 'lodash'
import Communications from 'react-native-communications'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave } from '../actions'
import { Card, CardSection, Button } from './common'

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value })
		})
	}

	saveChangesButton() {
		const { name, phone, shift } = this.props
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
	}

	textMessageButton() {
		const { phone, shift } = this.props
		Communications.text(phone, `Your upcoming shift is on ${shift}`)
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
						Fire
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.textMessageButton.bind(this)} >Message Schedule</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm
	return { name, phone, shift }
}

export default connect(null, { employeeUpdate, employeeSave })(EmployeeEdit)
