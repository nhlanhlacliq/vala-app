import { router } from 'expo-router';
import CreateWalletGoalScreen, { type WalletGoal } from '@/features/create-wallet/screens/CreateWalletGoalScreen';

export default function CreateWalletGoalRoute() {
  return (
    <CreateWalletGoalScreen
      onBack={() => router.back()}
      onNext={(goal: WalletGoal) =>
        router.push({
          pathname: '/(main)/transfer/create-wallet/review',
          params: {
            savingsGoal: goal.savingsGoal,
            targetAmount: String(goal.targetAmount),
            walletName: goal.walletName,
          },
        })
      }
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
