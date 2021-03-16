import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const MIGRATION_DEBUG = false;

const migrations = {
  0: state => state,
};

const persistConfig = {
  key: 'moneymoon',
  storage: AsyncStorage,
  version: 0, // version to track persist store
  migrate: createMigrate(migrations, {debug: MIGRATION_DEBUG}),
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [sagaMiddleware, logger];

const middleWareEnhancer = applyMiddleware(...middleware);
const store = createStore(persistedReducer, compose(middleWareEnhancer));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
