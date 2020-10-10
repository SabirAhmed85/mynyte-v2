import * as React from 'react';

import { useTheme } from '../../config/ThemeManager';

import { ScrollView } from '../../components/Themed';

export default function CovidScreen() {
  const { theme } = useTheme();

  React.useEffect(() => {
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 0 }}>
    </ScrollView>
  );
}
