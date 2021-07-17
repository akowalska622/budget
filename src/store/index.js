import { createSlice, configureStore } from '@reduxjs/toolkit';

//MOVEMENTS
const initialMovementsState = {
  movements: [],
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    add(state) {
      state.movements.push(1);
    },
    decrement(state) {
      state.movements.push(-1);
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
