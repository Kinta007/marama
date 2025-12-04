export const theme = {
  colors: {
    primary: '#FF6B6B', // 활기찬 코랄/오렌지 계열
    secondary: '#4ECDC4',
    background: '#F7F9FC',
    text: '#2D3436',
    textSecondary: '#636E72',
    white: '#FFFFFF',
    border: '#DFE6E9',
    cardShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    hoverShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme;
