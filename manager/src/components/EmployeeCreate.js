import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreator } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
	createEmployeeButton() {
		const { name, phone, shift } = this.props

		this.props.employeeCreator({ name, phone, shift: shift || 'Monday' })
	}
	
	render() {
		const { name, phone, shift } = this.props

		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jimmy"
						value={name}
						onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value }) }
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-555"
						value={phone}
						onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value }) }
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerLabelStyle}>Shift</Text>
					<Picker
						style={{ flex: 1, paddingTop: 20 }}
						selectedValue={shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.createEmployeeButton.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm

	return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreator })(EmployeeCreate)