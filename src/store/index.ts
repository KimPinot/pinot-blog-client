import {configureStore} from '@reduxjs/toolkit';
import rootReducer, {RootState} from '@store/rootReducer';
import {useSelector} from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

export const useRootState = () => useSelector<RootState>(state => state);

export default store;
