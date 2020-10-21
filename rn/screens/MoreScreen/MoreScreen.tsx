import React from 'react';

import { Text, View } from '../../components/Themed';
import { useTheme } from '../../config/ThemeManager';
import { styles } from './MoreScreen.style';

export default function MoreScreen () {
    const { mode, theme, toggle } = useTheme();

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).text}>
                Current Theme: {mode}
            </Text>
            <Text
                style={styles(theme).text}
                onPress={() => toggle()}>
                Toggle Theme
            </Text>
        </View>
    );
}