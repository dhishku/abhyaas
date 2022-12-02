import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface topBarState {
  showTopBar: boolean;
  showRulesIcon: boolean;
  showWhatsappIcon: boolean;
}

const initialShowTopBarState: topBarState = {
  showTopBar: true,
  showRulesIcon: false,
  showWhatsappIcon: true
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
    },
    showRulesIcon: state => {
      state.showRulesIcon = true;
    },
    hideRulesIcon: state => {
      state.showRulesIcon = false;
    },
    showWhatsappIcon: state => {
      state.showWhatsappIcon = true;
    },
    hideWhatsappIcon: state => {
      state.showWhatsappIcon = false;
    }
  }
});

export const { 
  showTopBar, 
  hideTopBar, 
  showRulesIcon, 
  hideRulesIcon, 
  showWhatsappIcon, 
  hideWhatsappIcon 
} = topBarSlice.actions; 

// export const selectShowTopBarState = (state: RootState) => state.topBar.showTopBar;
// export const selectShowRulesIconState = (state: RootState) => state.topBar.showRulesIcon;
// export const selectShowWhatsappIconState = (state: RootState) => state.topBar.showWhatsappIcon;

export default topBarSlice;

