import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function WalletDetailScreen() {
  const { walletId } = useLocalSearchParams<{ walletId: string }>();
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Wallet {walletId} — coming soon</Text>
    </View>
  );
}
