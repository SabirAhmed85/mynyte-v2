import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Text } from '../Themed';

export function ScreenLoadingComponent() {
  return <Text style={{textAlign: 'center'}}><FontAwesome5 name='spinner'/></Text>;
}
