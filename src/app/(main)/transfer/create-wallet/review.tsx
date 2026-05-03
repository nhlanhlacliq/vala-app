import { router, useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import CreateWalletReviewScreen from '@/features/create-wallet/screens/CreateWalletReviewScreen';
import { useCreateWallet } from '@/hooks/api/useWallets';
import { useUser } from '@/store/userStore';

export default function CreateWalletReviewRoute() {
  const params = useLocalSearchParams<{ savingsGoal: string; targetAmount: string; walletName: string }>();
  const { mutate: createWallet, isPending } = useCreateWallet();
  const { userId } = useUser();

  const goal = {
    savingsGoal: params.savingsGoal ?? '',
    targetAmount: parseFloat(params.targetAmount ?? '0'),
    walletName: params.walletName ?? '',
  };

  const handleNext = () => {
    createWallet(
      {
        userId: userId!,
        name: goal.walletName,
        description: goal.savingsGoal,
        targetAmount: goal.targetAmount,
      },
      {
        onSuccess: (wallet) => {
          router.push({
            pathname: '/(main)/transfer/create-wallet/confirmation',
            params: { walletId: wallet.walletId, walletName: wallet.name },
          });
        },
        onError: (err) => {
          const message = err instanceof Error ? err.message : 'Failed to create wallet.';
          Alert.alert('Error', message);
        },
      }
    );
  };

  return (
    <CreateWalletReviewScreen
      goal={goal}
      isLoading={isPending}
      onBack={() => router.back()}
      onNext={handleNext}
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
