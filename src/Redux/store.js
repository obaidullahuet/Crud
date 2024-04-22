import {  configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore,persistReducer } from 'redux-persist';
import { depoiteslice } from './depositereducer';
import { contactslice } from './contactreducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    wuthdrawl: depoiteslice.reducer,
    contactbooks: contactslice.reducer

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
