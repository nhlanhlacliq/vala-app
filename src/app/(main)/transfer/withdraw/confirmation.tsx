import { router } from 'expo-router';
import WithdrawConfirmationScreen from '@/features/withdraw/screens/WithdrawConfirmationScreen';

export default function WithdrawConfirmationRoute() {
  return (
    <WithdrawConfirmationScreen
      onBack={() => router.back()}
      onComplete={() => router.dismissTo('/(main)/home')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
