import { Card, Button, Radio, Alert } from 'antd'
import './App.css'

const App = () => {
  document.title = '子页面换肤';
  const { a, b, c = 3 } = {a: 1, b: 2}

  return (
    <div className="pageColorChange">
      <h1 className="fontColor">换肤子页面</h1>
      <Card>
        <h2>antd</h2>
        <div>
          <span style={{ marginRight: 20 }}>测试按钮</span>
          <Button type="primary">测试按钮</Button>
          <Button type="link">测试按钮</Button>
        </div>
        <div>
          <Alert type="error" message="测试提示" />
        </div>
        <div>
          <a href="">a标签</a>
        </div>
        <Radio>单选测试</Radio>
      </Card>
      <Card style={{ marginTop: 20 }}>
        <h2>原生样式</h2>
        <div>
          <p className="primaryTest">我是测试文字，我是测试文字</p>
        </div>
      </Card>
    </div>
  );
};

export default App
