import * as React from 'react';
import { StyleProp, View as DefaultView, ViewStyle } from 'react-native';

import { useTheme } from '../../config/ThemeManager';
import { TertiaryText, Button, DisabledText, SecondaryText } from '../Themed';
import styles from './ListProductMenuItem.style';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

interface MenuItemProps extends ProductItemMainContentProps {
  shareable?: boolean;
};

type ProductItemMainContentProps = {
  Name: string;
  Price: string;
  Description?: string;
  iconColor?: string;
  disabledNote?: string;
  itemCount?: number;
  style?: StyleProp<ViewStyle>;
};

const ItemMainContent = React.memo((item: ProductItemMainContentProps) => {
  const { theme } = useTheme();

  return (
    <DefaultView style={styles(theme).itemLeftContent}>
      <DefaultView style={styles(theme).itemMainContent}>
        <DefaultView style={styles(theme).itemHeadingContainer}>
          <SecondaryText style={styles(theme).itemName}>{item.Name}</SecondaryText>
          <SecondaryText style={styles(theme).itemPrice}>({item.Price})</SecondaryText>
        </DefaultView>
        {!!item.Description &&
          <TertiaryText style={styles(theme).itemDescription}>{item.Description}</TertiaryText>
        }
      </DefaultView>
    </DefaultView>
  )
});

const ListProductMenuItem = React.memo((props: { item: MenuItemProps, showMenu: boolean }) => {
  const { theme } = useTheme();
  const { item, showMenu } = props;

  return (
    <DefaultView style={styles(theme).container}>
      <ItemMainContent {...item}></ItemMainContent>
      {!!showMenu &&
        <Button containerStyle={{ marginLeft: 15, borderRadius: 16 }} icon={<FontAwesome5 name='bars' size={17} color={theme.secondaryText} />} type='clear'></Button>
      }
    </DefaultView>
  )
});

export default ListProductMenuItem;
