import { router } from 'expo-router';
import HomeScreen from '@/features/home/screens/HomeScreen';
import { type Wallet } from '@/features/home/components/WalletListItem';

export default function HomeRoute() {
  return (
    <HomeScreen
      onWalletPress={(wallet: Wallet) => router.push(`/(main)/home/${wallet.id}`)}
      onAddWallet={() => router.push('/(main)/transfer/create-wallet/intro')}
    />
  );
}
