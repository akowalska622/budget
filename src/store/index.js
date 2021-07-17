import { createSlice, configureStore } from '@reduxjs/toolkit';
import dummyItems from '../helpers/dummyItems';

const initialMovementsState = {
  movements: dummyItems,
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    add(state, action) {
      state.movements = [action.payload, ...state.movements];
    },
    delete(state) {
      //delete logic
    },
  },
});

//AUTHORIZATION
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//STORE CONFIGURATION

const store = configureStore({
  reducer: {
    movements: movementsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const movementsActions = movementsSlice.actions;
export const authActions = authSlice.actions;

export default store;
