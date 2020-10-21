import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { RouteProp } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { FeedParamList } from "../../../../types";

export const HeaderTitle = (
    props: {
        route: RouteProp<FeedParamList, "FeedScreen">,
        navigation: any,
        theme: any
    }
) => {
    const [hideSearchInput, setHideSearchInput] = React.useState(false);

    React.useEffect(() => {
        if (props.route.params !== undefined && (
            (props.route.params as any)['show-guide'] !== undefined ||
            (props.route.params as any)['whats-open'] !== undefined
        )) {
            setHideSearchInput(true);
        }
        else {
            setHideSearchInput(false);
        }
    }, [props]);

    return !!hideSearchInput ?
        null :
        (
            <DefaultView style={{ width: '100%', flex: 1, borderBottomColor: '#000', borderBottomWidth: 1 }}>
                <TextInput
                    onFocus={() => {
                        props.navigation.setParams({ search: '' })
                    }}
                    placeholder='Search...'
                    placeholderTextColor={props.theme.primaryActiveColorHighlight} // was '#fdbebe'
                    style={{
                        width: '100%',
                        borderBottomColor: props.theme.primaryActiveColorHighlight, // was '#f98493'
                        borderBottomWidth: 1,
                        height: 30,
                        color: props.theme.secondaryText,
                    }}
                />
            </DefaultView>
        )
};

export const HeaderLeftButton = (
    props: {
        route: RouteProp<FeedParamList, "FeedScreen">,
        navigation: any
    }
) => {
    const [hideButton, setHideButton] = React.useState(false);

    React.useEffect(() => {
        if (props.route.params !== undefined && (
            (props.route.params as any).search !== undefined ||
            (props.route.params as any)['whats-open'] !== undefined
        )) {
            setHideButton(true);
        }
        else {
            setHideButton(false);
        }
    }, [props]);

    return !!hideButton ?
        null :
        (
            <TouchableOpacity
                activeOpacity={0.5}
                containerStyle={{ height: '100%' }}
                style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => props.navigation.setParams({ 'show-guide': '' })}>
                <FontAwesome5
                    name='smile-beam'
                    size={24}
                    style={{ marginLeft: 18 }}
                    color='#fff'
                />
            </TouchableOpacity>
        )
}

export const HeaderRightButton = (
    props: {
        route: RouteProp<FeedParamList, "FeedScreen">,
        navigation: any
    }
) => {
    const [name, setName] = React.useState(props.route.params ? 'times' : 'clock');

    React.useEffect(() => {
        if (props.route.params !== undefined && (
            (props.route.params as any).search !== undefined ||
            (props.route.params as any)['whats-open'] !== undefined ||
            (props.route.params as any)['show-guide'] !== undefined
        )) {
            setName('times');
        }
        else {
            setName('clock');
        }
    }, [props]);

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            containerStyle={{ height: '100%' }}
            style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
                if (props.route.params !== undefined && (
                    (props.route.params as any).search !== undefined ||
                    (props.route.params as any)['whats-open'] !== undefined ||
                    (props.route.params as any)['show-guide'] !== undefined
                )) {
                    props.navigation.setParams({ search: undefined, 'whats-open': undefined, 'show-guide': undefined });
                }
                else {
                    props.navigation.setParams({ 'whats-open': '' });
                }
            }}>
            <FontAwesome5
                name={name}
                size={24}
                style={{ marginRight: 18 }}
                color='#fff'
            />
        </TouchableOpacity>
    )
}