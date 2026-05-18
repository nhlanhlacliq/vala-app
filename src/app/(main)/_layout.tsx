import QuickActionsSheet from '@/features/home/components/QuickActionsSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet from '@gorhom/bottom-sheet';
import { Tabs, router, usePathname } from 'expo-router';
import { Home, Settings } from 'lucide-react-native';
import { useRef, useState } from 'react';
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
  const sheetRef = useRef<BottomSheet>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const isTransactActive = sheetOpen || pathname.startsWith('/transfer');

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
            tabBarActiveTintColor: isTransactActive ? '#22d3ee' : '#ffffff',
            tabBarLabelStyle: { fontSize: 11, marginBottom: 6, color: isTransactActive ? '#22d3ee' : '#ffffff' },
            tabBarIcon: ({ color }) => <MaterialIcons name="compare-arrows" size={24} color={isTransactActive ? '#22d3ee' : color} />,
            tabBarButton: (props) => (
              <TouchableOpacity
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(props as any)}
                onPress={() => sheetRef.current?.expand()}
              />
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
        ref={sheetRef}
        onOpen={() => setSheetOpen(true)}
        onClose={() => setSheetOpen(false)}
        onAddMoney={() => { sheetRef.current?.close(); router.push('/(main)/transfer/deposit/amount'); }}
        onAddWallet={() => { sheetRef.current?.close(); router.push('/(main)/transfer/create-wallet/intro'); }}
        onTransfer={() => { sheetRef.current?.close(); router.push('/(main)/transfer/from-to'); }}
        onWithdraw={() => { sheetRef.current?.close(); router.push('/(main)/transfer/withdraw/source'); }}
        canWithdraw
      />
    </>
  );
}
