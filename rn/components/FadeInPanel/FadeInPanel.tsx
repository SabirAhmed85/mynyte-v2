import * as React from 'react';
import { Animated, Easing } from "react-native";

type FadeInPanelState = {
    children: React.ReactChild[];
    showPanel?: boolean;
    duration?: number;
    delay?: number;
    style?: any;
    withScaling?: boolean;
};

export const FadeInPanel = (props: FadeInPanelState) => {
    const contentWidthMax = 100;
    const contentWidthMin = 92;
    const contentWidth = React.useRef(new Animated.Value(92)).current;
    const contentOpacity = React.useRef(new Animated.Value(0.5)).current;
    const [display, setDisplay] = React.useState('none');
    const { delay, duration } = props;
    const transform = !!props.withScaling ? [
        {
            scaleX: contentWidth.interpolate({
                inputRange: [0, 100],
                outputRange: [0.75, 1]
            }),
        },
        {
            scaleY: contentWidth.interpolate({
                inputRange: [0, 100],
                outputRange: [0.98, 1]
            })
        }
    ] : [];

    React.useEffect(() => {
        if (!!props.showPanel) {
            setTimeout(() => setDisplay('flex'), delay);
        }
        if (!!props.withScaling) {
            Animated.timing(
                contentWidth,
                {
                    toValue: !props.showPanel ? contentWidthMin : contentWidthMax,
                    duration: duration,
                    delay: delay,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            ).start();
        }
        Animated.timing(
            contentOpacity,
            {
                toValue: !props.showPanel ? 0.5 : 1,
                duration: duration,
                delay: delay,
                useNativeDriver: false,
            }
        ).start(() => {
            if (!props.showPanel) { setDisplay('none') };
        });
    }, [contentWidth, contentOpacity, props])

    return (
        <Animated.View
            style={{
                ...props.style,
                display: display,
                transform: transform,
                overflow: 'hidden',
                opacity: contentOpacity,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

FadeInPanel.defaultProps = {
    showPanel: true,
    withScaling: false,
    duration: 200,
    delay: 0,
};