import * as React from 'react';
import { Dimensions } from 'react-native';

import FeedScreen from './FeedScreen';

export default function FeedScreenContainer(props: { route: any }) {
  const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
  const feedSearchCollapsed = true;
  let mountedRef = React.useRef(true);

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
      route={props.route}
      screenWidth={screenWidth}
      feedSearchCollapsed={feedSearchCollapsed} />
  )
}
