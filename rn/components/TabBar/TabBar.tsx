import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { View as DefaultView, Animated, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useTheme } from "../../config/ThemeManager";
import { Text } from "../../components/Themed";

type TabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
    icons: any;
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; icon: string; }) {
    return (props.icon === 'fa5') ?
        <FontAwesome5 solid size={22} {...props} /> :
        <FontAwesome size={22} {...props} />;
}

export default function TabBar({ state, descriptors, navigation, icons }: TabBarProps) {
    const { theme } = useTheme();

    return (
        <DefaultView style={{ flexDirection: 'row', height: 50, width: '100%', justifyContent: "space-around", alignItems: "center", alignContent: 'center' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label = route.name;
                const textScale = new Animated.Value(0);
                const textHeightAnimated = new Animated.Value(0);

                console.log(route);

                const isFocused = state.index === index;
                const icon = icons[route.name];

                const showText = (isFocused: boolean) => {
                    Animated.timing(
                        textScale,
                        {
                            toValue: !!isFocused ? 1 : 0,
                            duration: 250,
                            useNativeDriver: true,
                        }
                    ).start();
                    Animated.timing(
                        textHeightAnimated,
                        {
                            toValue: !!isFocused ? 1 : 0,
                            duration: 250,
                            useNativeDriver: false,
                        }
                    ).start();
                }

                showText(isFocused);

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <DefaultView
                        key={index}
                        style={{ padding: 0, flex: 1, flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.tabBarBackground, borderTopColor: theme.tabBarBorderColor, borderTopWidth: 1 }}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            accessibilityRole="button"
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 0 }}
                        >
                            <DefaultView style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <TabBarIcon name={icon.name} color={!!isFocused ? theme.tint : theme.tabIconDefault} icon={icon.iconSet} />
                                <Animated.View style={{
                                    height: textHeightAnimated.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 15], //base your animation on the calculated height
                                    })
                                }}>
                                    <Animated.Text style={{ color: theme.tint, fontSize: 11, transform: [{ scale: textScale }] }}>
                                        {label}
                                    </Animated.Text>
                                </Animated.View>
                            </DefaultView>
                        </TouchableOpacity>
                    </DefaultView>
                );
            })}
        </DefaultView>
    );
}