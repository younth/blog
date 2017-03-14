### 生命周期

react组件是一个状态机器，以状态为输入，以界面为输出。在不同状态切换之间，react提供了一系列的生命周期方法，大致可以分为如下三类：

#### 实例化时期

react组件在实例化时会依次调用如下组件方法：

- getDefaultProps
- getInitialState
- componentWillMount
- render
- componentDidMount

#### 存在期

当react组件被实例化后，用户的一些操作会导致组件状态的更新，此时如下方法将依次被调用：

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

#### 销毁时期

在组件销毁的时候，会调用如下组件方法：

- componentWillUnmount