import { router, useLocalSearchParams } from 'expo-router';
import ChooseAmountScreen from '@/features/deposit/screens/ChooseAmountScreen';

export default function DepositAmountRoute() {
  const { walletId } = useLocalSearchParams<{ walletId?: string }>();

  return (
    <ChooseAmountScreen
      onBack={() => router.back()}
      onNext={(amount) =>
        router.push({
          pathname: '/(main)/transfer/deposit/method',
          params: { amount: String(amount), walletId: walletId ?? '' },
        })
      }
      onCancel={() => router.back()}
    />
  );
}
