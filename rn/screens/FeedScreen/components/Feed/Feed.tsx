import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './Feed.style';

import { Listing } from '../../../../models';

import ListingCard from '../../components/ListingCard/ListingCard';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { Button, TertiaryText } from '../../../../components/Themed';

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
        <ScreenLoadingComponent/>
      }

      {!!loaded &&
        <DefaultView>
          <DefaultView style={{ flexDirection: 'row', height: 63, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
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
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                    icon={<FontAwesome5 name='filter' size={17} color={theme.disabledText} />}></Button>
                  <Button type='clear'
                    titleStyle={{ color: theme.disabledText }}
                    containerStyle={{ marginLeft: 8 }}
                    buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                    icon={<FontAwesome5 name='times' size={17} color={theme.disabledText} />}
                    onPress={() => feedTypeToggleInner('main')}></Button>
                </React.Fragment>
              }
              {feedType !== 'tonight' &&
                <Button
                  type='clear'
                  buttonStyle={{ height: 36, paddingTop: 5, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                  title='Show Tonight'
                  titleStyle={{ fontSize: 13, color: theme.disabledText }}
                  onPress={() => feedTypeToggleInner('tonight')}></Button>
              }
            </DefaultView>
          </DefaultView>

          <FadeInPanel withYScaling={true} delay={feedType === 'tonight' ? 150 : 0} showPanel={feedType === 'tonight'}>
            {tonightsListings.map((listing: Listing, key: number) => (
              <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
            ))}
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
