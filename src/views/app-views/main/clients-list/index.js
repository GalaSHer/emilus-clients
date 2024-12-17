import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { FETCH_USERS_REQUEST } from 'redux/constants/User';
import { connect } from 'react-redux';
import { deleteUser } from 'redux/actions';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export class UserList extends Component {
	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	deleteUser = userId => {
		this.props.deleteUser(userId);
    message.success({
			content: `Deleted user ${userId}`,
			duration: 1,
			onClose: () => message.destroy(),
		});
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users } = this.props;
  	const { userProfileVisible, selectedUser } = this.state;


		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				render: (_, record) => (
					<span> {record.username} </span>
				),
				sorter: {
					compare: (a, b) => {
							a = a.username.toLowerCase();
  						b = b.username.toLowerCase();
						return a.localeCompare(b);
					},
				},
			},
			{
				title: 'City',
				render: (_, user) => (
					<span> {user.address.city} </span>
				),
				sorter: {
					compare: (a, b) => {
							a = a.address.city.toLowerCase();
  						b = b.address.city.toLowerCase();
						return a.localeCompare(b);
					},
				},
			},
			{
				title: 'Phone',
				render: (_, user) => (
					<span> {user.phone} </span>
				),
				sorter: {
					compare: (a, b) => {
							a = a.phone.toLowerCase();
  						b = b.phone.toLowerCase();
						return a.localeCompare(b);
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Link to={`/app/main/clients/${elm.id}/edit-profile`}>
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
							</Link>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

const mapStateToProps = (state) => ({
  users: state.user.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch({ type: FETCH_USERS_REQUEST }),
	deleteUser: (userId) => dispatch(deleteUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);