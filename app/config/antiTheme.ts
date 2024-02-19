'use client';

import { theme, ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: '#000000',
    colorLink: '#321B1B',
  },
  components: {
    Menu: {
      darkItemSelectedBg: '#F5F5F5',
    },
    Input: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    Select: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    InputNumber: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    Calendar: {
      fullPanelBg: 'inherit',
    },
  },
};

export default antdTheme;
