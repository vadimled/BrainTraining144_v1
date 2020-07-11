import React from 'react';
import GameNavigator from "./src/navigation/GameNavigation";
import {enableScreens} from 'react-native-screens';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import reducers from "./src/store/reducers";
import regMiddleware from "./src/store/middlewares/regMiddleware";
import {watchSaga} from './src/store/saga';
import loginMiddleware from "./src/store/middlewares/loginMiddleware";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

enableScreens();

const
  sagaMiddleware = createSagaMiddleware(),
  middleware = [sagaMiddleware, regMiddleware, loginMiddleware],
  store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watchSaga);

function App() {
  return <Provider store={store}>
    <GameNavigator/>
  </Provider>
}

export default App;
