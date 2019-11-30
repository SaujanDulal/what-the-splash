import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
	// create the saga middleware
	const sagaMiddleware = createSagaMiddleware();
	// mount it on the Store
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
	// then run the saga
	sagaMiddleware.run(rootSaga);
	return store;
};

export default configureStore;
