'use client';

import { theme, ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: '#EFEFEF',
    colorLink: '#FCA20F',
  },
  components: {
    Menu: {
      darkItemSelectedBg: '#564A34',
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
