import { StyleSheet } from 'react-native';

export const styles = (theme: any) => StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: theme.searchPanelHeaderBg,
    },
    searchPanelHeader: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchPanelHeaderText: {
        fontSize: 16,
        justifyContent: 'flex-start',
    },
    searchPanelHeaderIcon: {
        fontSize: 20,
        marginTop: 2,
        width: 25,
        color: theme.primaryActiveColor,
        alignSelf: 'flex-end',
        textAlign: 'center',
    },
    mainSearchPicker: {
        height: 50,
        margin: 0,
        borderColor: theme.searchPanelInnerBorderColor,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 14,
        backgroundColor: '#373737',
        color: '#a9a9a9',
        fontFamily: 'titillium'
    },
});