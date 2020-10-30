import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../config/ThemeManager';
import { TertiaryText, Button, DisabledText, SecondaryText } from '../Themed';
import styles from './ListMenuItem.style';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

interface MenuItemProps extends ItemMainContentProps {
  shareable?: boolean;
};

type ItemMainContentProps = {
  title: string;
  icon: string;
  clickable: boolean;
  iconColor?: string;
  note?: string;
  disabledNote?: string;
  itemCount?: number;
  clickNavigation?: {
    screen: string;
    params: any;
  };
};

const MenuItemShareButton = (color: string) => (
  <FontAwesome5 name='share' size={16} color={color}></FontAwesome5>
);

const ItemMainContent = (item: ItemMainContentProps) => (
  <DefaultView style={{ alignItems: 'center', height: '100%', alignSelf: 'flex-start', flexDirection: 'row' }}>
    <DefaultView style={{width: 30, marginRight: 15, alignItems: 'center'}}>
      <FontAwesome5 name={item.icon} color={item.iconColor} size={22}></FontAwesome5>
    </DefaultView>
    {!!item.clickable &&
      <DefaultView>
        <DefaultView style={{ flexDirection: 'row' }}>
          <SecondaryText style={{fontSize: 15}}>{item.title}</SecondaryText>
          {item.itemCount && item.itemCount > 0 &&
            <SecondaryText style={{ fontSize: 15, marginLeft: 5 }}>({item.itemCount})</SecondaryText>
          }
        </DefaultView>
        {item.note &&
          <TertiaryText style={{fontSize: 13}}>{item.note}</TertiaryText>
        }
      </DefaultView>
    }
    {!item.clickable &&
      <DefaultView>
        <DisabledText style={{ fontSize: 15 }}>{item.title}</DisabledText>
        {item.disabledNote &&
          <DisabledText style={{fontSize: 13}}>{item.disabledNote}</DisabledText>
        }
      </DefaultView>
    }
  </DefaultView>
);

export default function ListMenuItem(props: { item: MenuItemProps }) {
  const nav = useNavigation()
  const { theme } = useTheme();
  const { item } = props;
  const screenWidth = Dimensions.get('window').width;
  item.iconColor = !!item.clickable ? theme.secondaryText : theme.disabledText;
  
  return (
    <DefaultView style={styles(theme, item.clickable).container}>
      {!!item.clickable && item.clickNavigation ?
        (
          <TouchableHighlight
            underlayColor={theme.listItemActiveBackground}
            onPress={() => {nav.navigate('Feed', { ...item.clickNavigation })}}
            style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, height: '100%' }}
            containerStyle={{ height: '100%', flex: 1 }}>
            <ItemMainContent {...item}></ItemMainContent>
          </TouchableHighlight>
        ) :
        (
          <DefaultView style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft: 15 }}>
            <ItemMainContent {...item}></ItemMainContent>
          </DefaultView>
        )
      }
      {!!props.item.shareable && !!props.item.clickable &&
        <Button type='clear' icon={MenuItemShareButton(theme.secondaryText)} containerStyle={{ alignItems: 'flex-end', marginRight: 11, marginLeft: 11, borderRadius: 16 }}></Button>
      }
    </DefaultView>
  )
}
