import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

// Thunk là một function được bao lại để tạm dừng nó cho đến khi được gọi
// Chúng ta có thể viết action là một function thay vì bắt buộc là object
// Redux-thunk không yêu cầu chúng ta phải hiểu thêm concept nào của riêng
// nó để có thể sử dụng, tất cả vẫn là Redux. Ý tưởng cơ bản của Thunk là 
// nếu cần kích hoạt side effects, hãy dùng chính actions. Một function
// trả về một function có thể thực hiện mọi thứ mà async call cần 
// và dispatch bất kì action nào ta muốn.
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
