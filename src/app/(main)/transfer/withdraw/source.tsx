import { router } from 'expo-router';
import WithdrawSourceScreen, { type WithdrawSource } from '@/features/withdraw/screens/WithdrawSourceScreen';
import { useWallets } from '@/hooks/api/useWallets';
import { useUser } from '@/store/userStore';

export default function WithdrawSourceRoute() {
  const { userId } = useUser();
  const { data } = useWallets(userId);

  const savingsTotal = (data ?? []).reduce((sum, w) => sum + w.balance.amount, 0);

  const sources: WithdrawSource[] = [
    { id: 'savings', name: 'Savings account', balance: savingsTotal, type: 'savings' },
    ...(data ?? []).map(w => ({
      id: w.walletId,
      name: w.name,
      balance: w.balance.amount,
      type: 'wallet' as const,
    })),
  ];

  return (
    <WithdrawSourceScreen
      sources={sources}
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
