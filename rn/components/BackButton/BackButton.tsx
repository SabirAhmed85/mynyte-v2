import * as React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BackButton = (props: { navigation: any, screenName: string, params?: any }) => (
    <TouchableOpacity
        activeOpacity={0.5}
        containerStyle={{ height: '100%' }}
        style={{ width: 50, height: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}
        onPress={() => props.navigation.dangerouslyGetState().routes.length === 1 ?
            props.navigation.reset({ index: 0, routes: [{ name: props.screenName, params: props.params }] }) :
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

BackButton.defaultProps = {
    params: {}
};