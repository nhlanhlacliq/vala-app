import { router } from 'expo-router';
import SelectDepositWalletScreen from '@/features/deposit/screens/SelectDepositWalletScreen';
import { useWallets } from '@/hooks/api/useWallets';
import { useUser } from '@/store/userStore';

export default function SelectDepositWalletRoute() {
  const { userId } = useUser();
  const { data = [] } = useWallets(userId);

  return (
    <SelectDepositWalletScreen
      wallets={data}
      onBack={() => router.back()}
      onNext={(wallet) =>
        router.push({
          pathname: '/(main)/transfer/deposit/amount',
          params: { walletId: wallet.walletId },
        })
      }
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
