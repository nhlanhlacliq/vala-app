import { router } from 'expo-router';
import WithdrawSourceScreen, { type WithdrawSource } from '@/features/withdraw/screens/WithdrawSourceScreen';

export default function WithdrawSourceRoute() {
  return (
    <WithdrawSourceScreen
      onBack={() => router.back()}
      onNext={(source: WithdrawSource) =>
        router.push({
          pathname: '/(main)/transfer/withdraw/amount',
          params: { sourceId: source.id, sourceName: source.name, sourceBalance: String(source.balance) },
        })
      }
      onCancel={() => router.back()}
    />
  );
}
