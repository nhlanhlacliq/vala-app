import { router } from 'expo-router';
import WalletCreationConfirmationScreen from '@/features/create-wallet/screens/WalletCreationConfirmationScreen';

export default function WalletCreationConfirmationRoute() {
  return (
    <WalletCreationConfirmationScreen
      onBack={() => router.back()}
      onFundWallet={() => router.push('/(main)/transfer/deposit/amount')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
