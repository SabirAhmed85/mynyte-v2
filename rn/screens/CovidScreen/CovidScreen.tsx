import * as React from 'react';

import { useTheme } from '../../config/ThemeManager';
import { styles } from './CovidScreen.style';

import { ScrollView } from '../../components/Themed';

export default function CovidScreen() {
  const { theme } = useTheme();

  React.useEffect(() => {
  }, []);

  return (
    <ScrollView style={styles().container}>
    </ScrollView>
  );
}
