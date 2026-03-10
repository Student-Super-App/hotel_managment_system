// ============================================================
// ROBO HMS - UI Slice (Redux Toolkit)
// ============================================================
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  sidebarCollapsed: boolean;
  theme: 'light' | 'dark' | 'system';
  activePage: string;
}

const getInitialTheme = (): 'light' | 'dark' | 'system' => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
  return 'light';
};

const initialState: UIState = {
  sidebarCollapsed: false,
  theme: getInitialTheme(),
  activePage: 'dashboard',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      // Apply theme to document
      const root = document.documentElement;
      if (action.payload === 'dark') {
        root.classList.add('dark');
      } else if (action.payload === 'light') {
        root.classList.remove('dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', prefersDark);
      }
    },
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarCollapsed, setTheme, setActivePage } = uiSlice.actions;
export default uiSlice.reducer;
