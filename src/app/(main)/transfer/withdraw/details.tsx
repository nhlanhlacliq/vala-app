import { router, useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import WithdrawDetailsScreen from '@/features/withdraw/screens/WithdrawDetailsScreen';
import { useWithdrawFromWallet } from '@/hooks/api/useWallets';

export default function WithdrawDetailsRoute() {
  const params = useLocalSearchParams<{
    sourceId: string; sourceName: string; sourceBalance: string;
    amount: string; bankId: string; bankName: string; bankLast4: string;
  }>();
  const { mutate: withdraw, isPending } = useWithdrawFromWallet();

  const source = { id: params.sourceId, name: params.sourceName, balance: parseFloat(params.sourceBalance ?? '0'), type: 'wallet' as const };
  const bank   = { id: params.bankId, name: params.bankName, last4: params.bankLast4 };
  const amount = parseFloat(params.amount ?? '0');

  const handleNext = () => {
    withdraw(
      {
        walletId: params.sourceId,
        payload: {
          currency: 'R',
          amount,
          toAccountId: params.bankId,
          walletId: params.sourceId,
        },
      },
      {
        onSuccess: () => {
          router.push('/(main)/transfer/withdraw/confirmation');
        },
        onError: (err) => {
          const message = err instanceof Error ? err.message : 'Withdrawal failed. Please try again.';
          Alert.alert('Error', message);
        },
      }
    );
  };

  return (
    <WithdrawDetailsScreen
      source={source}
      amount={amount}
      bank={bank}
      isLoading={isPending}
      onBack={() => router.back()}
      onNext={handleNext}
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
