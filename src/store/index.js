import { createSlice, configureStore } from '@reduxjs/toolkit';
import dummyItems from '../helpers/dummyItems';

const initialMovementsState = {
  movements: dummyItems,
  sortedFromNewest: true,
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    add(state, action) {
      state.movements = [action.payload, ...state.movements];
    },
    delete(state, action) {
      const id = action.payload;
      state.movements = state.movements.filter(mov => mov.id !== id);
    },
    changeSorting(state) {
      state.sortedFromNewest = !state.sortedFromNewest;
    },
  },
});

//AUTHORIZATION
const initialAuthState = {
  isAuthenticated: false,
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};

//STORE CONFIGURATION
const store = configureStore({
  reducer: {
    movements: movementsSlice.reducer,
    auth: authSlice.reducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export const movementsActions = movementsSlice.actions;
export const authActions = authSlice.actions;

export default store;
