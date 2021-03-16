import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const MIGRATION_DEBUG = false;
const sagaMiddleware = createSagaMiddleware();

const migrations = {
  0: state => state,
};

const persistConfig = {
  key: 'moneymoon',
  storage: AsyncStorage,
  version: 0, // version to track persist store
  migrate: createMigrate(migrations, {debug: MIGRATION_DEBUG}),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWareEnhancer = applyMiddleware(...middleware);
const store = createStore(
  persistedReducer,
  composeEnhancers(middleWareEnhancer),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
