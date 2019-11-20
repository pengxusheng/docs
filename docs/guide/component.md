# 公共组件

## 提示框

具体配置见 antd 中的 Modal，组件增加配置项：content

```
Alert.comfirm({
  title: '删除应用',
  message: '您确定要删除以下应用吗？',
  content: 'APP-1',
  onOk: () => {},
})

Alert.error({
  title: '删除应用',
  content: '应用中已包含服务，无法删除！',
})

Alert.info({
  title: '提示',
  content: '请先设置上级机构租户资源配额！',
})
```

## 按钮

具体配置见 antd 中的 Button，增加配置项：cancel、permission

```
<Button type="primary">主要按钮</Button>
<Button>一般按钮</Button>
<Button disabled>禁用按钮</Button>
<Button type="cancel">取消按钮</Button>
```

## 图标字体

具体配置见 antd 的 Icon，字体库是 iconfont.js

```
<IconFont type="sync" />
```

## 提示

具体配置见 antd 的 notification，增加 loading 方法

```
notice.success('成功！')
notice.error('失败！')
notice.info('提示！')
notice.warn('警告！')
notice.warning('警告！')
notice.loading('等待')
```

## 表格

具体配置见 antd 的 Table，完整使用方法见示例页面

```
<Table
  loading={loading}
  buttonGroup={this.renderButtonGroup()}
  inputSearch={inputSearch}
  rowSelection={rowSelection}
  columns={columns}
  dataSource={dataSource}
  pagination={pagination}
  onChange={this.handleTableChange}
/>
```

## 显示框

根据 visible，控制 dialog 的显示和隐藏

```
<ViewDialog
  style={{ top: 70 }}
  visible={isOpenDialog}
  onClose={() => this.setState({ isOpenDialog: false })}
>
  <Detail />
</ViewDialog>
```

## 终端组件

[xterm](https://xtermjs.org/)

## yaml 代码显示组件

[react-codemirror2](https://github.com/scniro/react-codemirror2#readme)

## 继续添加

根据需求，继续添加新的公共组件
