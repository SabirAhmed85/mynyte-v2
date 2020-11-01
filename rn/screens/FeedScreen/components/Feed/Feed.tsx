import * as React from 'react';
import { View as DefaultView, ScrollView as DefaultScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Button, ColorlessText, TertiaryText } from '../../../../components/Themed';
import { styles } from './Feed.style';

import { Listing } from '../../../../models';

import ListingCard from '../../components/ListingCard/ListingCard';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import SmallListingCard from '../SmallListingCard/SmallListingCard';

type FeedProps = {
  theme: any;
  tonightsListings: Listing[];
  loaded: boolean;
  listings: Listing[];
  listingsLoaded: boolean;
  screenWidth: number;
  feedType: string;
  feedHeaderText: string;
  feedTypeToggleInner: (feedType: string) => void;
};

export default function Feed(props: FeedProps) {
  const { theme, tonightsListings, loaded, listings, listingsLoaded, screenWidth, feedType, feedHeaderText, feedTypeToggleInner } = props;

  return (
    <DefaultView style={{ position: 'relative' }}>

      {!loaded &&
        <ScreenLoadingComponent />
      }

      {!!loaded &&
        <DefaultView style={{ marginTop: 10 }}>
          <DefaultView style={{ flexDirection: 'row', height: 53, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 13, paddingRight: 10, paddingBottom: 10, backgroundColor: theme.feedBackgroundColor, borderBottomWidth: 1, borderBottomColor: theme.feedHeaderBorderColor }}>
            <TertiaryText bold style={{ fontSize: 16 }}>{feedHeaderText}</TertiaryText>
            <DefaultView style={{ flexDirection: 'row' }}>
              {feedType === 'tonight' &&
                <React.Fragment>
                  <Button type='clear'
                    titleStyle={{ color: theme.disabledText }}
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32 }}
                    icon={<FontAwesome5 name='filter' size={17} color={theme.feedHeaderButtonColor} />}></Button>
                  <Button type='clear'
                    titleStyle={{ color: theme.disabledText }}
                    containerStyle={{ marginLeft: 8 }}
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32 }}
                    icon={<FontAwesome5 name='times' size={17} color={theme.feedHeaderButtonColor} />}
                    onPress={() => feedTypeToggleInner('main')}></Button>
                </React.Fragment>
              }
              {feedType !== 'tonight' &&
                <Button
                  type='clear'
                  buttonStyle={{ height: 36, paddingTop: 5, borderRadius: 32 }}
                  title='Show Tonight'
                  titleStyle={{ fontSize: 13, color: theme.feedHeaderButtonColor }}
                  onPress={() => feedTypeToggleInner('tonight')}></Button>
              }
            </DefaultView>
          </DefaultView>

          <FadeInPanel style={{ borderTopColor: theme.listItemBorderColor, borderTopWidth: 0, paddingBottom: 5, backgroundColor: theme.feedBackgroundColor }} withYScaling={true} delay={feedType === 'tonight' ? 150 : 0} showPanel={feedType === 'tonight'}>
            <DefaultView style={{
              marginLeft: 10
            }}>
              <DefaultView style={{
                marginLeft: 3, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: theme.feedSectionBorderColor
              }}>

                <ColorlessText bold style={{ fontSize: 15, marginBottom: 20, marginTop: 15, color: theme.primaryActiveColor, marginRight: 30 }}>Restaurants in Bedford you could be booking a table at tonight</ColorlessText>
                <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row' }}>
                  {tonightsListings.map((listing: Listing, key: number) => (
                    <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                  ))}
                </DefaultScrollView>
              </DefaultView>
            </DefaultView>
            <DefaultView style={{
              paddingLeft: 10,
              paddingBottom: 0,
            }}>
              <DefaultView style={{
                marginLeft: 3, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: theme.feedSectionBorderColor
              }}>

                <ColorlessText bold style={{ fontSize: 15, paddingBottom: 20, paddingTop: 10, marginRight: 30, color: theme.primaryActiveColor }}>Book tickets for movies showing tonight in Bedford</ColorlessText>
                <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row' }}>
                  {tonightsListings.map((listing: Listing, key: number) => (
                    <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                  ))}
                </DefaultScrollView>
              </DefaultView>
            </DefaultView>
            <DefaultView style={{
              paddingLeft: 10
            }}>
              <DefaultView style={{
                marginLeft: 3,
                paddingBottom: 0,
              }}>
                <ColorlessText bold style={{ fontSize: 15, paddingBottom: 20, paddingTop: 10, color: theme.primaryActiveColor }}>Watch the game</ColorlessText>
                <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row', marginBottom: 10 }}>
                  {tonightsListings.map((listing: Listing, key: number) => (
                    <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                  ))}
                </DefaultScrollView>
              </DefaultView>
            </DefaultView>
          </FadeInPanel>

          {!!listingsLoaded &&
            <FadeInPanel withYScaling={true} delay={feedType === 'main' ? 150 : 0} showPanel={feedType === 'main'}>
              {
                listings.map((listing: Listing, key: number) => (
                  <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
                ))
              }
            </FadeInPanel>
          }
        </DefaultView>
      }
    </DefaultView>
  )
}
