import QuickActionsSheet from '@/features/home/components/QuickActionsSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs, router } from 'expo-router';
import { Home, Settings } from 'lucide-react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const HIDDEN_SCREENS = [
  'transfer/from-to',
  'transfer/transfer-details',
  'transfer/transfer-confirmation',
  'transfer/deposit/amount',
  'transfer/deposit/method',
  'transfer/deposit/details',
  'transfer/deposit/confirmation',
  'transfer/create-wallet/intro',
  'transfer/create-wallet/goal',
  'transfer/create-wallet/review',
  'transfer/create-wallet/confirmation',
  'transfer/withdraw/source',
  'transfer/withdraw/amount',
  'transfer/withdraw/bank',
  'transfer/withdraw/details',
  'transfer/withdraw/confirmation',
];

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
            height: 72,
            position: 'absolute',
            paddingTop: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // position: "relative",
          },
          tabBarActiveTintColor: '#22d3ee',
          tabBarInactiveTintColor: '#ffffff',
          tabBarLabelStyle: { fontSize: 11, marginBottom: 6 },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{ title: 'Home', tabBarIcon: ({ color }) => <Home size={20} color={color} /> }}
        />
        <Tabs.Screen
          name="transfer/index"
          options={{
            title: 'Transact',
            tabBarIcon: ({ color }) => <MaterialIcons name="compare-arrows" size={24} color={color} />,
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={() => setSheetVisible(true)} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{ title: 'Settings', tabBarIcon: ({ color }) => <Settings size={20} color={color} /> }}
        />

        {HIDDEN_SCREENS.map((name) => (
          <Tabs.Screen key={name} name={name} options={{ href: null }} />
        ))}
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
