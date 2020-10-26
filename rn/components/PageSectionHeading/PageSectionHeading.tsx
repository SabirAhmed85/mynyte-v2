import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { LightText } from '../../components/Themed';
import { styles } from './PageSectionHeading.style';

export const PageSectionHeading = (props: { theme: any, content: string, children?: any }) => (
    <DefaultView style={styles(props.theme).container}>
        <LightText>{props.content}</LightText>
        {props.children}
    </DefaultView>
);
