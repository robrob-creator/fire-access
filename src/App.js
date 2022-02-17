import './App.css';
import { Form, Input, Button } from 'antd';
import { KeyOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import store from 'store';


function App() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    store.set('idToken', values.idToken)
    store.set('localId', values.localId)
  };
  return (
    <div className="App">
      <header className="App-header">
      <KeyOutlined style={{ fontSize:'50px',margin:'10px', verticalAlign: 'middle' }}/>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="localId"
        rules={[{ required: true, message: 'Please input your localId!' }]}
      >
        <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Please input your localId" />
      </Form.Item>
      <Form.Item
        name="idToken"
        rules={[{ required: true, message: 'Please input your idToken!' }]}
      >
        <TextArea
          placeholder="Please input your idToken ..."
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
      </header>
    </div>
  );
}

export default App;
