import { useTheme } from '../../config/ThemeManager';
import * as React from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useMediaQuery } from 'react-responsive';

import FeedScreen from './FeedScreen';
import { ListingContext } from '../../config/ListingProvider';

export default function FeedScreenContainer(props: { route: any }) {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
  const [showFilter, setShowFilter] = React.useState(false);
  const [feedType, setFeedType] = React.useState('tonight');
  let mountedRef = React.useRef(true);
  const isTabletOrMobileDevice = useMediaQuery({maxDeviceWidth: 1224});
  const isDesktop = useMediaQuery({minDeviceWidth: 1224});

  React.useEffect(() => {
    Dimensions.addEventListener('change', (dimensions) => {
      if (!mountedRef.current) return null;
      setScreenWidth(dimensions.window.width);
    });

    return () => {
      mountedRef.current = false;
    }
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowFilter(event.nativeEvent.contentOffset.y > 100 ? true: false);
  };

  const feedTypeToggle = (feedType: string) => {
    setFeedType(feedType);
  }

  return (
    <FeedScreen
      isTabletOrMobileDevice={isTabletOrMobileDevice}
      isDesktop={isDesktop}
      route={props.route}
      theme={theme}
      screenWidth={screenWidth}
      showFilter={showFilter}
      handleScroll={handleScroll}
      feedType={feedType}
      feedTypeToggle={feedTypeToggle} />
  )
}
