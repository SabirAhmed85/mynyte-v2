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
  feedTypeToggleInner: (feedType: string) => void;
};

export default function Feed(props: FeedProps) {
  const { theme, tonightsListings, loaded, listings, listingsLoaded, screenWidth, feedType, feedTypeToggleInner } = props;

  return (
    <DefaultView style={{ position: 'relative' }}>

      {!loaded &&
        <ScreenLoadingComponent />
      }

      {!!loaded &&
        <DefaultView>
          <DefaultView style={{ flexDirection: 'row', height: 63, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, backgroundColor: theme.feedHeaderBackgroundColor, borderBottomWidth: 1, borderBottomColor: theme.feedHeaderBorderColor }}>
            {feedType === 'tonight' &&
              <TertiaryText style={{ fontSize: 15 }}>What's on Tonight...</TertiaryText>
            }
            {feedType !== 'tonight' &&
              <TertiaryText style={{ fontSize: 15 }}>Your MyNyte Feed</TertiaryText>
            }

            <DefaultView style={{ flexDirection: 'row' }}>
              {feedType === 'tonight' &&
                <React.Fragment>
                  <Button type='clear'
                    titleStyle={{ color: theme.disabledText }}
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.feedHeaderButtonBackground }}
                    icon={<FontAwesome5 name='filter' size={17} color={theme.feedHeaderButtonColor} />}></Button>
                  <Button type='clear'
                    titleStyle={{ color: theme.disabledText }}
                    containerStyle={{ marginLeft: 8 }}
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.feedHeaderButtonBackground }}
                    icon={<FontAwesome5 name='times' size={17} color={theme.feedHeaderButtonColor} />}
                    onPress={() => feedTypeToggleInner('main')}></Button>
                </React.Fragment>
              }
              {feedType !== 'tonight' &&
                <Button
                  type='clear'
                  buttonStyle={{ height: 36, paddingTop: 5, borderRadius: 32, backgroundColor: theme.feedHeaderButtonBackground }}
                  title='Show Tonight'
                  titleStyle={{ fontSize: 13, color: theme.feedHeaderButtonColor }}
                  onPress={() => feedTypeToggleInner('tonight')}></Button>
              }
            </DefaultView>
          </DefaultView>

          <FadeInPanel style={{ borderTopColor: theme.listItemBorderColor, borderTopWidth: 0, paddingBottom: 15 }} withYScaling={true} delay={feedType === 'tonight' ? 150 : 0} showPanel={feedType === 'tonight'}>
            <DefaultView style={{
              backgroundColor: theme.feedSectionBackground, paddingLeft: 10, paddingBottom: 10, paddingTop: 10, borderBottomWidth: 1, borderBottomColor: theme.feedSectionBorderColor }}>
              <ColorlessText style={{ fontSize: 15, paddingBottom: 20, paddingTop: 10, color: theme.primaryActiveColor }}>Restaurants &amp; Takeaways in Bedford</ColorlessText>
              <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row', marginBottom: 10 }}>
                {tonightsListings.map((listing: Listing, key: number) => (
                  <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                ))}
              </DefaultScrollView>
            </DefaultView>
            <DefaultView style={{
              backgroundColor: theme.feedSectionBackground, paddingLeft: 10, paddingBottom: 10, marginTop: 5, borderBottomWidth: 1, borderBottomColor: theme.feedSectionBorderColor
            }}>
              <ColorlessText style={{ fontSize: 15, paddingBottom: 20, paddingTop: 10, color: theme.primaryActiveColorHighlight }}>Movies showing tonight in Bedford</ColorlessText>
              <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row', marginBottom: 10 }}>
                {tonightsListings.map((listing: Listing, key: number) => (
                  <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                ))}
              </DefaultScrollView>
            </DefaultView>
            <DefaultView style={{
              backgroundColor: theme.feedSectionBackground, paddingLeft: 10, marginTop: 5 }}>
              <ColorlessText style={{ fontSize: 15, paddingBottom: 20, paddingTop: 10, color: theme.primaryActiveColorHighlight }}>Watch the game</ColorlessText>
              <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceVertical={false} style={{ flexDirection: 'row', marginBottom: 10 }}>
                {tonightsListings.map((listing: Listing, key: number) => (
                  <SmallListingCard key={key} listing={listing} screenWidth={screenWidth} />
                ))}
              </DefaultScrollView>
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
