import * as React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BackButton = (props: { navigation: any }) => (
    <TouchableOpacity
        activeOpacity={0.5}
        containerStyle={{ height: '100%' }}
        style={{ width: 50, height: '100%', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => props.navigation.dangerouslyGetState().routes.length === 1 ?
            props.navigation.reset({ index: 0, routes: [{ name: 'FeedScreen', params: {} }] }) :
            props.navigation.goBack()
        }>
        <FontAwesome5
            name='times'
            size={24}
            style={{ marginLeft: 15 }}
            color='#fff'
        />
    </TouchableOpacity>
);