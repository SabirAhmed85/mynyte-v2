import * as React from 'react';

import { View, Text } from '../../components/Themed';
import { styles } from './PageInnerHeading.style';

export const PageInnerHeading = (props: { theme: any, content: string, children?: any }) => (
    <View style={styles(props.theme).container}>
        <Text>{props.content}</Text>
        {props.children}
    </View>
);
