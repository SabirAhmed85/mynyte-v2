import * as React from 'react';
import { View as DefaultView, ViewStyle } from 'react-native'; 
import { FontAwesome5 } from '@expo/vector-icons';

import { Text } from '../Themed';
import { StyleProp } from 'react-native';

export function ScreenLoadingComponent(props: { style?: StyleProp<ViewStyle> }) {
  return (
      <DefaultView style={props.style}>
        <Text style={[{textAlign: 'center'}, { marginTop: 40 }]}><FontAwesome5 size={24} name='spinner'/></Text>
      </DefaultView>
    );
}
