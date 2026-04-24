import { router, useLocalSearchParams } from 'expo-router';
import PaymentDetailsScreen from '@/features/deposit/screens/PaymentDetailsScreen';

export default function DepositDetailsRoute() {
  const { amount } = useLocalSearchParams<{ amount: string }>();
  return (
    <PaymentDetailsScreen
      amount={parseFloat(amount ?? '0')}
      onBack={() => router.back()}
      onNext={() => router.push('/(main)/transfer/deposit/confirmation')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
