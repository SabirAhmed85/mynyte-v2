import React from 'react';
import { Text, View } from '../components/Themed';
import { useTheme } from '../config/ThemeManager';

export default function MoreScreen () {
    const { mode, theme, toggle } = useTheme();

    return (
        <View style={{flex: 1}}>
            <Text style={{ color: theme.primaryColor }}>
                Current Theme: {mode}
            </Text>
            <Text
                style={{ color: theme.primaryColor }}
                onPress={() => toggle()}>
                Toggle Theme
            </Text>
        </View>
    );
}