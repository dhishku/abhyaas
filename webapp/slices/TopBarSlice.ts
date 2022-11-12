import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface topBarState {
  showTopBar: boolean
}

const initialShowTopBarState: topBarState = {
  showTopBar: true
};

export const topBarSlice = createSlice({
  name: 'topBar',
  initialState: initialShowTopBarState,
  reducers: {
    showTopBar: state => {
      state.showTopBar = true;
    },
    hideTopBar: state => {
      state.showTopBar = false;
    }
  }
});

export const { showTopBar, hideTopBar } = topBarSlice.actions; 

export const selectShowTopBarState = (state: RootState) => state.topBar.showTopBar;

export default topBarSlice.reducer;

