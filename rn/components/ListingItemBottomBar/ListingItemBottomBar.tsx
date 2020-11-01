import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { Button } from '../../components/Themed';
import { barStyles, nativeElemsButtonStyles, buttonStyles } from './ListingItemBottomBar.style';

import { Listing, Offer } from '../../models';


type BottomBarButtonProps = {
  icon: string;
  onPress: () => any;
  text: string;
  active?: boolean;
  solid?: boolean;
};

const ButtonIcon = (props: BottomBarButtonProps) => (
  <FontAwesome5 active={props.active} solid={props.active} style={buttonStyles(props).buttonIcon} name={props.icon} />
);

const BottomBarButton = (props: BottomBarButtonProps) => (
  <Button
    type='clear'
    titleStyle={nativeElemsButtonStyles(props).buttonTitle}
    buttonStyle={{ flexDirection: 'row', alignItems: 'center' }}
    containerStyle={{ flexDirection: 'row', alignItems: 'center' }}
    icon={ButtonIcon(props)}
    onPress={props.onPress}
    title={props.text} />
);

BottomBarButton.defaultProps = {
  active: false,
};

const ListingItemBottomBar = (props: { listing: Listing | Offer }) => {
  const { theme } = useTheme();
  const { listing } = props;
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
    !!(state as Offer).watch ? 'Unsave' : 'Save'
  );

  const getLikeText = (): string => (
    !!state.like ? 'Unlike' : 'Like'
  );

  return (
    <React.Fragment>
      <DefaultView style={barStyles(theme).container}>
        <DefaultView style={barStyles(theme).leftButtons}>
          {watchableListings.includes(listing.listingType) &&
            <BottomBarButton
              active={(state as Offer).watch}
              icon='heart'
              solid={true}
              onPress={watchListing}
              text={getWatchText()} />
          }
          {!watchableListings.includes(listing.listingType) &&
            <BottomBarButton
              active={(state as Listing).like}
              icon='thumbs-up'
              solid={true}
              onPress={likeListing}
              text={getLikeText()} />
          }
        </DefaultView>
        <DefaultView style={barStyles(theme).rightButtons}>
          <BottomBarButton
            icon='share-square'
            onPress={shareListing}
            text='Share' />
          <BottomBarButton
            icon='envelope'
            onPress={sendListing}
            text='Send' />
        </DefaultView>
      </DefaultView>
    </React.Fragment>
  )
};

export default ListingItemBottomBar;
