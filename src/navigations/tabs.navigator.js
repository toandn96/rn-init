import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  TodayScreen,
  SurplusScreen,
  BudgetScreen,
  ReportScreen,
  OtherScreen,
} from '../screens';
import {BOTTOM_TABS_ROUTES} from '../appConstants';
SimpleLineIcons.loadFont();

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={BOTTOM_TABS_ROUTES.TODAY_SCREEN}
        component={TodayScreen}
        options={{
          header: () => null,
          tabBarLabel: 'Hôm nay',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TABS_ROUTES.SURPLUS_SCREEN}
        component={SurplusScreen}
        options={{
          header: () => null,
          tabBarLabel: 'Số dư',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="rocket" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TABS_ROUTES.BUDGET_SCREEN}
        component={BudgetScreen}
        options={{
          header: () => null,
          tabBarLabel: 'Ngân sách',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TABS_ROUTES.REPORT_SCREEN}
        component={ReportScreen}
        options={{
          header: () => null,
          tabBarLabel: 'Báo cáo',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="chart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={BOTTOM_TABS_ROUTES.OTHER_SCREEN}
        component={OtherScreen}
        options={{
          header: () => null,
          tabBarLabel: 'Thêm',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
