import React from 'react';

import { useTheme } from '~/hooks/ThemeContext';

const ToggleTheme: React.FC = () => {
  const { toggle } = useTheme();
  return (
    <button data-testid="toggleButton" onClick={() => toggle()}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
