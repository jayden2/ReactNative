import _ from 'lodash'
import Communications from 'react-native-communications'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'

class EmployeeEdit extends Component {
	state = { showModal: false }

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

	onAccept() {
		this.props.employeeDelete({ uid: this.props.employee.uid })
	}

	onDecline() {
		this.setState({ showModal: false })
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props}  />
				<CardSection>
					<Button onPress={this.saveChangesButton.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Fire
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.textMessageButton.bind(this)} >Message Schedule</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to fire the employee?
				</Confirm>
				
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm
	return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)
