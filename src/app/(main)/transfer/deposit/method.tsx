import { router, useLocalSearchParams } from 'expo-router';
import SelectPaymentMethodScreen from '@/features/deposit/screens/SelectPaymentMethodScreen';

export default function DepositMethodRoute() {
  const { amount } = useLocalSearchParams<{ amount: string }>();
  return (
    <SelectPaymentMethodScreen
      onBack={() => router.back()}
      onNext={(method) => router.push({ pathname: '/(main)/transfer/deposit/details', params: { amount, method } })}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
