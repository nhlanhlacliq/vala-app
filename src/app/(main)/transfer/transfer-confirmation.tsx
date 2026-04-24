import { router } from 'expo-router';
import TransferConfirmationScreen from '@/features/transfer/screens/TransferConfirmationScreen';

export default function TransferConfirmationRoute() {
  return (
    <TransferConfirmationScreen
      onBack={() => router.back()}
      onComplete={() => router.dismissTo('/(main)/home')}
    />
  );
}
