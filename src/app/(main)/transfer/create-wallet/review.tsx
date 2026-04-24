import { router, useLocalSearchParams } from 'expo-router';
import CreateWalletReviewScreen from '@/features/create-wallet/screens/CreateWalletReviewScreen';

export default function CreateWalletReviewRoute() {
  const params = useLocalSearchParams<{ savingsGoal: string; targetAmount: string; walletName: string }>();

  const goal = {
    savingsGoal: params.savingsGoal ?? '',
    targetAmount: parseFloat(params.targetAmount ?? '0'),
    walletName: params.walletName ?? '',
  };

  return (
    <CreateWalletReviewScreen
      goal={goal}
      onBack={() => router.back()}
      onNext={() => router.push('/(main)/transfer/create-wallet/confirmation')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
