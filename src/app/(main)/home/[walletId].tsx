import { router, useLocalSearchParams } from 'expo-router';
import WalletDetailScreen from '@/features/wallet/screens/WalletDetailScreen';

const MOCK: Record<string, { name: string; balance: number }> = {
  '1': { name: "Parent's house", balance: 3400 },
  '2': { name: "Kid's stationary", balance: 850 },
  '3': { name: 'Car maintenance', balance: 1890 },
};

export default function WalletDetailRoute() {
  const { walletId } = useLocalSearchParams<{ walletId: string }>();
  const wallet = MOCK[walletId] ?? { name: 'Wallet', balance: 0 };

  return (
    <WalletDetailScreen
      walletId={walletId}
      walletName={wallet.name}
      balance={wallet.balance}
      onBack={() => router.back()}
      onDeposit={() => router.push('/(main)/transfer/deposit/amount')}
    />
  );
}
