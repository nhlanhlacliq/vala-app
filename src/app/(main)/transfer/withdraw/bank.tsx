import { router, useLocalSearchParams } from 'expo-router';
import WithdrawBankScreen, { type BankAccount } from '@/features/withdraw/screens/WithdrawBankScreen';

export default function WithdrawBankRoute() {
  const params = useLocalSearchParams<{ sourceId: string; sourceName: string; sourceBalance: string; amount: string }>();

  return (
    <WithdrawBankScreen
      onBack={() => router.back()}
      onNext={(bank: BankAccount) =>
        router.push({
          pathname: '/(main)/transfer/withdraw/details',
          params: { ...params, bankId: bank.id, bankName: bank.name, bankLast4: bank.last4 },
        })
      }
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
