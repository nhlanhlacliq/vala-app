import { router } from 'expo-router';
import PaymentConfirmationScreen from '@/features/deposit/screens/PaymentConfirmationScreen';

export default function DepositConfirmationRoute() {
  return (
    <PaymentConfirmationScreen
      onBack={() => router.back()}
      onComplete={() => router.dismissTo('/(main)/home')}
      onTransferToWallet={() => router.push('/(main)/transfer/from-to')}
    />
  );
}
