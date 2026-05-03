import { router } from 'expo-router';
import HomeScreen from '@/features/home/screens/HomeScreen';
import { type Wallet } from '@/features/home/components/WalletListItem';
import { useUser } from '@/store/userStore';
import { useWallets } from '@/hooks/api/useWallets';

export default function HomeRoute() {
  const { userId, userName, accountNumber } = useUser();
  const { data, isLoading } = useWallets(userId);

  const wallets: Wallet[] = (data ?? []).map(w => ({
    id: w.walletId,
    name: w.name,
    balance: w.balance.amount,
  }));

  return (
    <HomeScreen
      userName={userName ?? undefined}
      accountNumber={accountNumber ?? undefined}
      wallets={wallets}
      isLoading={isLoading}
      onWalletPress={(wallet: Wallet) => router.push(`/(main)/home/${wallet.id}`)}
      onAddWallet={() => router.push('/(main)/transfer/create-wallet/intro')}
    />
  );
}
