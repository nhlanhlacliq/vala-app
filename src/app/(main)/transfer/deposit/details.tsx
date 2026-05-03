import { router, useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import PaymentDetailsScreen from '@/features/deposit/screens/PaymentDetailsScreen';
import { useFundWallet } from '@/hooks/api/useWallets';

export default function DepositDetailsRoute() {
  const { amount, method, walletId } = useLocalSearchParams<{
    amount: string;
    method: string;
    walletId: string;
  }>();
  const { mutate: fundWallet, isPending } = useFundWallet();

  const parsedAmount = parseFloat(amount ?? '0');

  const handleNext = () => {
    fundWallet(
      {
        walletId,
        payload: {
          currency: 'R',
          amount: parsedAmount,
          fromAccountId: method,
          walletId,
        },
      },
      {
        onSuccess: () => {
          router.push('/(main)/transfer/deposit/confirmation');
        },
        onError: (err) => {
          const message = err instanceof Error ? err.message : 'Payment failed. Please try again.';
          Alert.alert('Error', message);
        },
      }
    );
  };

  return (
    <PaymentDetailsScreen
      amount={parsedAmount}
      isLoading={isPending}
      onBack={() => router.back()}
      onNext={handleNext}
      onCancel={() => router.navigate('/(main)/home')}
    />
  );
}
