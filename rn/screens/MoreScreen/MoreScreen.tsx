import React from 'react';

import { PrimaryButton, Text, View } from '../../components/Themed';
import { useTheme } from '../../config/ThemeManager';
import { styles } from './MoreScreen.style';

export default function MoreScreen () {
    const { mode, theme, toggle } = useTheme();

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).text}>
                Current Theme: {mode}
            </Text>
            <PrimaryButton onPress={() => toggle()} title='Toggle Theme'/>
        </View>
    );
}