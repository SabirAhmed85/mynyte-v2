import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../../../../config/ThemeManager';
import { styles } from './ListingPageActionButtonsBar.style';

import { ActionButton } from '../../../../../components/ActionButton/ActionButton';
import { Listing } from '../../../../../models';

export default function ListingPageActionButtonsBar(props: { listing: Listing }) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const onPress = () => {
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name } });
  };

  const [listing, setListing] = React.useState(props.listing as Listing);

  return (
    <DefaultView
      style={{ flexDirection: 'row', width: '100%', display: 'flex', backgroundColor: theme.primaryActiveBackground, borderBottomColor: theme.primaryActiveBorderColorFeint, borderBottomWidth: 1 }}>
      <ActionButton
        icon='comment-dots'
        titleStyle={{color: '#ebebeb'}}
        active={true}
        activeColor={theme.secondaryText}
        disabledColor={theme.disabledText}
        title='Enquiry'
        onPress={() => {
          
        }} />
      <ActionButton
        icon='eye'
        color={theme.secondaryText}
        active={!!listing.watch}
        activeColor={theme.primaryActiveColorShaded}
        disabledColor={theme.disabledText}
        title={!!listing.watch ? 'Unwatch' : 'Watch'}
        onPress={() => {
          setListing({ ...listing, watch: !listing.watch });
        }} />
      <ActionButton
        icon='images'
        titleStyle={{color: '#ebebeb'}}
        active={true}
        activeColor={theme.secondaryText}
        disabledColor={theme.disabledText}
        title='Photos'
        onPress={() => {}} />
    </DefaultView>
  );
}
