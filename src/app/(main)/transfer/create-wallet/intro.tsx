import { router } from 'expo-router';
import CreateWalletIntroScreen from '@/features/create-wallet/screens/CreateWalletIntroScreen';

export default function CreateWalletIntroRoute() {
  return (
    <CreateWalletIntroScreen
      onBack={() => router.back()}
      onNext={() => router.push('/(main)/transfer/create-wallet/goal')}
      onCancel={() => router.back()}
    />
  );
}
