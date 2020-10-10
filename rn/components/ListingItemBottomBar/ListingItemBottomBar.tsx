import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import { View as NativeView } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from '../../components/Themed';

import { Listing, Offer } from '../../models';

import { barStyles, nativeElemsButtonStyles, buttonStyles } from './ListingItemBottomBar.style';

type BottomBarButtonProps = {
  icon: string;
  onPress: () => any;
  text: string;
  active?: boolean;
};

const ButtonIcon = (props: BottomBarButtonProps) => (
  <FontAwesome5 active={props.active} style={buttonStyles(props).buttonIcon} name={props.icon} />
);

const BottomBarButton = (props: BottomBarButtonProps) => (
  <Button
    type='clear'
    titleStyle={nativeElemsButtonStyles(props).buttonTitle}
    icon={ButtonIcon(props)}
    onPress={props.onPress}
    title={props.text} />
);

BottomBarButton.defaultProps = {
  active: false
};

const ListingItemBottomBar = ({ listing }: { listing: Listing | Offer }) => {
  const [state, setState] = React.useState(listing as Listing | Offer);
  const watchableListings = ['Offer', 'Event', 'Movie'];

  const watchListing = () => {
    (listing as Offer).watch = !(listing as Offer).watch;
    setState({ ...listing, watch: (listing as Offer).watch });
  };

  const likeListing = () => {
    listing.like = !listing.like;
    setState({ ...listing, like: listing.like });
  };

  const shareListing = () => {
  };

  const sendListing = () => {
  };

  const getWatchText = (): string => (
    !!(state as Offer).watch ? 'Unwatch' : 'Watch'
  );

  const getLikeText = (): string => (
    !!state.like ? 'Unlike' : 'Like'
  );

  return (
    <NativeView>
      <Card.Divider style={barStyles.cardDivider} />
      <NativeView style={{ flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 5, paddingRight: 5 }}>
        <NativeView style={{ width: '50%', alignItems: 'flex-start' }}>
          {watchableListings.includes(listing.listingType) &&
            <BottomBarButton
              active={(state as Offer).watch}
              icon='eye'
              onPress={watchListing}
              text={getWatchText()} />
          }
          {!watchableListings.includes(listing.listingType) &&
            <BottomBarButton
              active={(state as Listing).like}
              icon='thumbs-up'
              onPress={likeListing}
              text={getLikeText()} />
          }
        </NativeView>
        <NativeView style={{ width: '50%', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <BottomBarButton
            icon='share-square'
            onPress={shareListing}
            text='Share' />
          <BottomBarButton
            icon='envelope'
            onPress={sendListing}
            text='Send' />
        </NativeView>
      </NativeView>
    </NativeView>
  )
};

export default ListingItemBottomBar;
