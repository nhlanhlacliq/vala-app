import { router, useLocalSearchParams } from 'expo-router';
import SelectPaymentMethodScreen from '@/features/deposit/screens/SelectPaymentMethodScreen';

export default function DepositMethodRoute() {
  const { amount, walletId } = useLocalSearchParams<{ amount: string; walletId?: string }>();

  return (
    <SelectPaymentMethodScreen
      onBack={() => router.back()}
      onNext={(method) =>
        router.push({
          pathname: '/(main)/transfer/deposit/details',
          params: { amount, method, walletId: walletId ?? '' },
        })
      }
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
