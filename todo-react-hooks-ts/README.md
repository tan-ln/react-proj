## 组件划分
1. App
2. TodoList
3. 子组件

  - Input
  - List
    - index
    - item


## 组件标准写法
```tsx
import React, { FC, ReactElement } from "react";

// 类型接口，props 需要与之匹配
interface IProps {}

const TdInput: FC<IProps> = ({

}): ReactElement => {
  return (
    <div></div>
  )
}

export default TdInput
```

## useReducer
useState 的替代方案
在某些场景下，useReducer 会比 useState 更适用
- state 逻辑较复杂且包含多个子值
- 或者下一个 state 依赖于之前的 state 等