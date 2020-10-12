import * as React from 'react';

import { useTheme } from '../../config/ThemeManager';
import { OpaqueView, TertiaryText, Button, DisabledText, SecondaryText } from '../Themed';
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
  <OpaqueView style={{ alignItems: 'center', height: '100%', alignSelf: 'flex-start', flexDirection: 'row' }}>
    <OpaqueView style={{width: 30, marginRight: 15, alignItems: 'center'}}>
      <FontAwesome5 name={item.icon} color={item.iconColor} size={22}></FontAwesome5>
    </OpaqueView>
    {!!item.clickable &&
      <OpaqueView>
        <OpaqueView style={{ flexDirection: 'row' }}>
          <SecondaryText style={{fontSize: 15}}>{item.title}</SecondaryText>
          {item.itemCount && item.itemCount > 0 &&
            <SecondaryText style={{ fontSize: 15, marginLeft: 5 }}>({item.itemCount})</SecondaryText>
          }
        </OpaqueView>
        {item.note &&
          <TertiaryText style={{fontSize: 13}}>{item.note}</TertiaryText>
        }
      </OpaqueView>
    }
    {!item.clickable &&
      <OpaqueView>
        <DisabledText style={{ fontSize: 15 }}>{item.title}</DisabledText>
        {item.disabledNote &&
          <DisabledText style={{fontSize: 13}}>{item.disabledNote}</DisabledText>
        }
      </OpaqueView>
    }
  </OpaqueView>
);

export default function ListMenuItem(props: { item: MenuItemProps }) {
  const nav = useNavigation()
  const { theme } = useTheme();
  const { item } = props;
  const screenWidth = Dimensions.get('window').width;
  item.iconColor = !!item.clickable ? theme.secondaryText : theme.disabledText;
  
  return (
    <OpaqueView style={styles().container}>
      {!!item.clickable && item.clickNavigation ?
        (
          <TouchableHighlight
            underlayColor='#4d4d4d'
            onPress={() => {nav.navigate('Feed', { ...item.clickNavigation })}}
            style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, height: '100%' }}
            containerStyle={{ height: '100%', flex: 1 }}>
            <ItemMainContent {...item}></ItemMainContent>
          </TouchableHighlight>
        ) :
        (
          <OpaqueView style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft: 15 }}>
            <ItemMainContent {...item}></ItemMainContent>
          </OpaqueView>
        )
      }
      {!!props.item.shareable && !!props.item.clickable &&
        <Button type='clear' icon={MenuItemShareButton(theme.secondaryText)} containerStyle={{ alignItems: 'flex-end', marginRight: 11, marginLeft: 11, borderRadius: 16 }}></Button>
      }
    </OpaqueView>
  )
}
