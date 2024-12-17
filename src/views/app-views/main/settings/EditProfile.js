import React, { Component } from 'react';
import { Form, Button, Input, DatePicker, Row, Col } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { findUser, updateUser } from 'redux/actions';
import { connect } from 'react-redux';
import Loading from 'components/shared-components/Loading';

export class EditProfile extends Component {
  formRef = React.createRef(); // Создаем ссылку на форму

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const { userId, findUser } = this.props;
    findUser(userId);
  }

  componentDidUpdate(prevProps) {
    // Проверяем, изменился ли пользователь
    if (prevProps.user !== this.props.user) {
      const { user } = this.props;
      if (user) {
        this.formRef.current.setFieldsValue({
          name: user.name,
          username: user.username,
          email: user.email,
          phoneNumber: user.phone,
          website: user.website,
          address: user.address.street,
          city: user.address.city,
          postcode: user.address.zipcode,
          dateOfBirth: null, // Пример для даты, если нужна обработка
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  state = {
    isSubmitting: false,
  };

  onFinish = values => {
    this.setState({ isSubmitting: true });
    setTimeout(() => {
      this.props.updateUser(values);
      this.setState({ isSubmitting: false });
      this.props.history.push('/app/main/clients/list');
    }, 1000);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { isSubmitting } = this.state;

    if (isSubmitting) {
      return <Loading />;
    }

    return (
      <>
        <div className="mt-4">
          <Form
            ref={this.formRef}
            name="basicInformation"
            layout="vertical"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: 'email',
                          message: 'Please enter a valid email!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Date of Birth" name="dateOfBirth">
                      <DatePicker className="w-100" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phoneNumber">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Address" name="address">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Post code" name="postcode">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = {
  findUser, updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
