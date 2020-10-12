import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../../config/ThemeManager';
import { OpaqueView } from '../../Themed';
import { styles } from './OffeDetailActionButtonsBar.style';

import { ActionButton } from '../../ActionButton/ActionButton';
import { Offer } from '../../../models';

export default function OfferDetailActionButtonsBar(props: { offer: Offer }) {
  const { theme } = useTheme();
  const nav = useNavigation();

  const [offer, setOffer] = React.useState(props.offer as Offer);

  return (
    <OpaqueView
      style={{ flexDirection: 'row', width: '100%', display: 'flex', backgroundColor: theme.primaryActiveBackground, borderBottomColor: theme.primaryActiveBorderColorFeint, borderBottomWidth: 1 }}>
      <ActionButton
        icon='comment-dots'
        titleStyle={{color: '#ebebeb'}}
        active={true}
        activeColor={theme.secondaryText}
        disabledColor={theme.disabledText}
        title='Enquire'
        onPress={() => {
          
        }} />
      <ActionButton
        icon='eye'
        color={theme.secondaryText}
        active={!!offer.watch}
        activeColor={theme.primaryActiveColorShaded}
        disabledColor={theme.disabledText}
        title={!!offer.watch ? 'Unwatch' : 'Watch'}
        onPress={() => {
          setOffer({ ...offer, watch: !offer.watch });
        }} />
      <ActionButton
        icon='user-tag'
        titleStyle={{color: '#ebebeb'}}
        active={true}
        activeColor={theme.secondaryText}
        disabledColor={theme.disabledText}
        title='Claim'
        onPress={() => {}} />
    </OpaqueView>
  );
}
