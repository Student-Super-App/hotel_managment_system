// ============================================================
// ROBO HMS - Auth Slice (Redux Toolkit)
// ============================================================
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, AdminUser } from '@/types';

interface AuthState {
  user: User | AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  portalType: 'hotel' | 'admin' | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('auth_user') || 'null'),
  token: localStorage.getItem('auth_token'),
  isAuthenticated: !!localStorage.getItem('auth_token'),
  portalType: localStorage.getItem('portal_type') as 'hotel' | 'admin' | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User | AdminUser; token: string; portalType: 'hotel' | 'admin' }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.portalType = action.payload.portalType;
      localStorage.setItem('auth_token', action.payload.token);
      localStorage.setItem('auth_user', JSON.stringify(action.payload.user));
      localStorage.setItem('portal_type', action.payload.portalType);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.portalType = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      localStorage.removeItem('portal_type');
    },
    updateUser: (state, action: PayloadAction<Partial<User | AdminUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload } as User | AdminUser;
        localStorage.setItem('auth_user', JSON.stringify(state.user));
      }
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
