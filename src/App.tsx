import { Card, Button, Radio, Alert } from 'antd'
import './App.css'

const App = () => {
  document.title = '子页面换肤';
  const { a, b, c = 3 } = {a: 1, b: 2}

  return (
    <div className="pageColorChange">
      <h1 className="fontColor">换肤子页面</h1>
      <Card>
        <div>
          <span style={{ marginRight: 20 }}>测试按钮</span>
          <Button type="primary">测试按钮</Button>
        </div>
      </Card>
      <Card style={{ marginTop: 20 }}>
        <Radio>单选测试</Radio>
      </Card>
    </div>
  );
};

export default App
