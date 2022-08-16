import { Card, Button, Popover } from 'antd'

const App = (props: any) => {
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
        <Popover title="测试气泡">
          <span style={{ marginRight: 20 }} className="fontColor">
            测试气泡
          </span>
          {
            a > 0 ? a < 9 ? '0<a<9' : 'a>=9' : 'a<=0'
          }
        </Popover>
      </Card>
    </div>
  );
};

export default App
