import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { SecondaryText } from '../../components/Themed';
import { styles } from './PageSectionHeading.style';

export const PageSectionHeading = (props: { theme: any, content: string, children?: any }) => (
    <DefaultView style={styles(props.theme).container}>
        <SecondaryText>{props.content}</SecondaryText>
        {props.children}
    </DefaultView>
);
