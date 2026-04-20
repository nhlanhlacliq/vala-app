import { Tabs } from 'expo-router';
import { Home, ArrowLeftRight, Settings } from 'lucide-react-native';

export default function MainTabsLayout() {
  return (
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
        options={{ title: 'Transfer', tabBarIcon: ({ color }) => <ArrowLeftRight size={20} color={color} /> }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{ title: 'Settings', tabBarIcon: ({ color }) => <Settings size={20} color={color} /> }}
      />
    </Tabs>
  );
}
