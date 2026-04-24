import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Tabs, router } from 'expo-router';
import { Home, ArrowLeftRight, Settings } from 'lucide-react-native';
import QuickActionsSheet from '@/features/home/components/QuickActionsSheet';

export default function MainTabsLayout() {
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#111',
            borderTopWidth: 0,
            borderRadius: 40,
            marginHorizontal: 16,
            marginBottom: 16,
            height: 64,
            position: 'absolute',
          },
          tabBarActiveTintColor: '#22d3ee',
          tabBarInactiveTintColor: '#ffffff',
          tabBarLabelStyle: { fontSize: 11, marginBottom: 6 },
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{ title: 'Home', tabBarIcon: ({ color }) => <Home size={20} color={color} /> }}
        />
        <Tabs.Screen
          name="transfer/index"
          options={{
            title: 'Transact',
            tabBarIcon: ({ color }) => <ArrowLeftRight size={20} color={color} />,
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={() => setSheetVisible(true)} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{ title: 'Settings', tabBarIcon: ({ color }) => <Settings size={20} color={color} /> }}
        />
      </Tabs>

      <QuickActionsSheet
        visible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        onAddMoney={() => { setSheetVisible(false); router.push('/(main)/transfer/deposit/amount'); }}
        onAddWallet={() => { setSheetVisible(false); router.push('/(main)/transfer/create-wallet/intro'); }}
        onTransfer={() => { setSheetVisible(false); router.push('/(main)/transfer/from-to'); }}
        onWithdraw={() => { setSheetVisible(false); router.push('/(main)/transfer/withdraw/source'); }}
        canWithdraw
      />
    </>
  );
}
