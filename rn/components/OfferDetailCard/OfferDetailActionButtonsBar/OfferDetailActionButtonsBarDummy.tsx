import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../../config/ThemeManager';
import { styles } from './OffeDetailActionButtonsBar.style';

import { ActionButton } from '../../ActionButton/ActionButton';

export default function OfferDetailActionButtonsBarDummy() {
  const { theme } = useTheme();

  return (
    <DefaultView
      style={styles(theme).container}>
      <ActionButton
        icon='comment-dots'
        active={false}
        activeColor={theme.lightText}
        disabledColor={theme.disabledText}
        disabled={true}
        title='Enquire'
        onPress={() => {}} />
      <ActionButton
        icon='eye'
        active={false}
        activeColor={theme.primaryActiveColorShaded}
        disabledColor={theme.disabledText}
        title='Watch'
        disabled={true}
        onPress={() => {}} />
      <ActionButton
        icon='user-tag'
        active={false}
        activeColor={theme.lightText}
        disabledColor={theme.disabledText}
        title='Claim'
        disabled={true}
        onPress={() => {}} />
    </DefaultView>
  );
}
