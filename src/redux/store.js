import { createStore, applyMiddleware, combineReducers } from 'redux';
import { addTodo } from './reducer/addTodo.reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  addTodo: addTodo,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistedStore = persistStore(store);
