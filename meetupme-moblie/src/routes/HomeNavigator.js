import { TabNavigator, TabBarTop } from 'react-navigation';

import Colors from '../../constants/Colors';

import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },

    Notification: {
      screen: NotificationsScreen
    },

    Profile: {
      screen: ProfileScreen
    }
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarComponent: TabBarTop,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: Colors.blackBlueColor,
      activeTintColor: Colors.redColor,
      pressOpacity: 0.3,
      pressColor: Colors.redColor, // for Android only
      indicatorStyle: {
        backgroundColor: Colors.redColor,
        alignSelf: 'flex-end'
      },
      style: {
        backgroundColor: Colors.whiteColor
      }
    }
  }
);
