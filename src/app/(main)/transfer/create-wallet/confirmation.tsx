import { router, useLocalSearchParams } from 'expo-router';
import WalletCreationConfirmationScreen from '@/features/create-wallet/screens/WalletCreationConfirmationScreen';

export default function WalletCreationConfirmationRoute() {
  const { walletId } = useLocalSearchParams<{ walletId: string; walletName: string }>();

  return (
    <WalletCreationConfirmationScreen
      onBack={() => router.back()}
      onFundWallet={() =>
        router.push({ pathname: '/(main)/transfer/deposit/amount', params: { walletId } })
      }
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
