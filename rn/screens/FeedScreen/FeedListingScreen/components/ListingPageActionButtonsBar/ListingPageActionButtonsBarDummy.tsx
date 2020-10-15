import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../../../../config/ThemeManager';

import { ActionButton } from '../../../../../components/ActionButton/ActionButton';

export default function ListingPageActionButtonsBarDummy() {
  const { theme } = useTheme();

  return (
    <DefaultView
      style={{ flexDirection: 'row', width: '100%', display: 'flex', backgroundColor: theme.primaryActiveBackground, borderBottomColor: theme.primaryActiveBorderColorFeint, borderBottomWidth: 1 }}>
      <ActionButton
        icon='comment-dots'
        titleStyle={{color: '#ebebeb'}}
        active={false}
        activeColor={theme.secondaryText}
        disabledColor={theme.primaryActiveColorHighlight}
        title='Enquiry'
        disabled={true}
        onPress={() => {}} />
      <ActionButton
        icon='eye'
        color={theme.secondaryText}
        active={false}
        activeColor={theme.primaryActiveColorHighlight}
        disabledColor={theme.primaryActiveColorHighlight}
        title='Watch'
        disabled={true}
        onPress={() => {}} />
      <ActionButton
        icon='images'
        titleStyle={{color: '#ebebeb'}}
        active={false}
        activeColor={theme.secondaryText}
        disabledColor={theme.primaryActiveColorHighlight}
        title='Photos'
        disabled={true}
        onPress={() => {}} />
    </DefaultView>
  );
}
