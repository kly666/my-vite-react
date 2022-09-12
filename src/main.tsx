import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
// import 'antd/dist/antd.variable.less'
import 'antd/dist/antd.less'

// vite-plugin-qiankun helper
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector("#sub-root")
      : document.getElementById("sub-root")
  );
}

renderWithQiankun({
  mount(props) {
    console.log("sub-vite3-react mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  update() {
    console.log('update')
  },
  unmount(props: any) {
    console.log("sub-vite3-react unmount");
    const { container } = props;
    const mountRoot = container?.querySelector("#root");
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector("#root")
    );
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}