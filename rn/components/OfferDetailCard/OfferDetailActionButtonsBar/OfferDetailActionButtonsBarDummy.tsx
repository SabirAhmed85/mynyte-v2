import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../../config/ThemeManager';

import { ActionButton } from '../../ActionButton/ActionButton';

export default function OfferDetailActionButtonsBarDummy() {
  const { theme } = useTheme();

  return (
    <DefaultView
      style={{ flexDirection: 'row', width: '100%', display: 'flex', backgroundColor: theme.primaryActiveBackground, borderBottomColor: theme.primaryActiveBorderColorFeint, borderBottomWidth: 1 }}>
      <ActionButton
        icon='comment-dots'
        active={false}
        activeColor={theme.secondaryText}
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
        activeColor={theme.secondaryText}
        disabledColor={theme.disabledText}
        title='Claim'
        disabled={true}
        onPress={() => {}} />
    </DefaultView>
  );
}
