import { router, useLocalSearchParams } from 'expo-router';
import WithdrawAmountScreen from '@/features/withdraw/screens/WithdrawAmountScreen';

export default function WithdrawAmountRoute() {
  const { sourceId, sourceName, sourceBalance } = useLocalSearchParams<{
    sourceId: string; sourceName: string; sourceBalance: string;
  }>();

  const source = { id: sourceId, name: sourceName, balance: parseFloat(sourceBalance ?? '0'), type: 'wallet' as const };

  return (
    <WithdrawAmountScreen
      source={source}
      onBack={() => router.back()}
      onNext={(amount) =>
        router.push({
          pathname: '/(main)/transfer/withdraw/bank',
          params: { sourceId, sourceName, sourceBalance, amount: String(amount) },
        })
      }
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
