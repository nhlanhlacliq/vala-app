import { router, useLocalSearchParams } from 'expo-router';
import WalletDetailScreen from '@/features/wallet/screens/WalletDetailScreen';
import { useWallets } from '@/hooks/api/useWallets';
import { useUser } from '@/store/userStore';

export default function WalletDetailRoute() {
  const { walletId } = useLocalSearchParams<{ walletId: string }>();
  const { userId } = useUser();
  const { data } = useWallets(userId);

  const wallet = data?.find(w => w.walletId === walletId);

  return (
    <WalletDetailScreen
      walletId={walletId}
      walletName={wallet?.name ?? 'Wallet'}
      balance={wallet?.balance.amount ?? 0}
      onBack={() => router.back()}
      onDeposit={() =>
        router.push({ pathname: '/(main)/transfer/deposit/amount', params: { walletId } })
      }
    />
  );
}
