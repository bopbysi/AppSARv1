import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import FilesystemStorage from "redux-persist-filesystem-storage";

import toggleSupport from './Reducer/SupportReducer'
import AddSurveyReducer from './Reducer/AddSurveyReducer'

const persistConfig = {
    key: "brkp",
    storage: FilesystemStorage,
};

const rootReducer = combineReducers ({
    toggleSupport: toggleSupport,
    AddSurveyReducer: AddSurveyReducer,
});

const persistReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistReducer);
export const persistStore = persistStore(store);