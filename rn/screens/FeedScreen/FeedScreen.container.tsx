import { useTheme } from '../../config/ThemeManager';
import * as React from 'react';
import { Dimensions } from 'react-native';
import { useMediaQuery } from 'react-responsive';

import FeedScreen from './FeedScreen';
import { ListingContext } from '../../config/ListingProvider';

export default function FeedScreenContainer(props: { route: any }) {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
  const feedSearchCollapsed = true;
  let mountedRef = React.useRef(true);
  const isTabletOrMobileDevice = useMediaQuery({maxDeviceWidth: 1224});
  const isDesktop = useMediaQuery({minDeviceWidth: 1224});
  console.log(isTabletOrMobileDevice);

  React.useEffect(() => {
    Dimensions.addEventListener('change', (dimensions) => {
      if (!mountedRef.current) return null;
      setScreenWidth(dimensions.window.width);
    });

    return () => {
      mountedRef.current = false;
    }
  }, []);

  return (
    <FeedScreen
      isTabletOrMobileDevice={isTabletOrMobileDevice}
      isDesktop={isDesktop}
      route={props.route}
      theme={theme}
      screenWidth={screenWidth}
      feedSearchCollapsed={feedSearchCollapsed} />
  )
}
