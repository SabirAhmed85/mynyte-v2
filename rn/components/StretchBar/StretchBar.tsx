import * as React from 'react';
import { Animated, Easing } from "react-native";

type StretchBarState = {
    showBar?: boolean;
    duration?: number;
    delay?: number;
    style?: any;
};

export const StretchBar = (props: StretchBarState) => {
    const contentWidth = React.useRef(new Animated.Value(0)).current;
    const { delay, duration } = props;

    React.useEffect(() => {
        Animated.timing(
            contentWidth,
            {
                toValue: !props.showBar ? 0 : 100,
                duration: duration,
                delay: delay,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();
    }, [contentWidth, props])

    return (
        <Animated.View
            style={{
                ...props.style,
                width: contentWidth.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%']
                }),
            }}
        />
    );
}

StretchBar.defaultProps = {
    showBar: true,
    duration: 200,
    delay: 0,
};