import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import { ListView, View, Text } from 'react-native'

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch()
		this.createDataSource(this.props)
	}

	componentWillReceiveProps(nextProps) {
		//nextProps are the next set of props that this component will be rendered with
		//this.props is still the old set of props
		this.createDataSource(nextProps)
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		this.dataSource = ds.cloneWithRows(employees)
	}
	
	render() {
		return (
			<View>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const { employees } = this.state
	
	return {
		employees
	}
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
