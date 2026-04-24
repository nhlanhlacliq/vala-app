import { router, useLocalSearchParams } from 'expo-router';
import WithdrawDetailsScreen from '@/features/withdraw/screens/WithdrawDetailsScreen';

export default function WithdrawDetailsRoute() {
  const params = useLocalSearchParams<{
    sourceId: string; sourceName: string; sourceBalance: string;
    amount: string; bankId: string; bankName: string; bankLast4: string;
  }>();

  const source = { id: params.sourceId, name: params.sourceName, balance: parseFloat(params.sourceBalance ?? '0'), type: 'wallet' as const };
  const bank   = { id: params.bankId, name: params.bankName, last4: params.bankLast4 };
  const amount = parseFloat(params.amount ?? '0');

  return (
    <WithdrawDetailsScreen
      source={source}
      amount={amount}
      bank={bank}
      onBack={() => router.back()}
      onNext={() => router.push('/(main)/transfer/withdraw/confirmation')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
