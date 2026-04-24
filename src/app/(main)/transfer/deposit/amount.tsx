import { router } from 'expo-router';
import ChooseAmountScreen from '@/features/deposit/screens/ChooseAmountScreen';

export default function DepositAmountRoute() {
  return (
    <ChooseAmountScreen
      onBack={() => router.back()}
      onNext={(amount) => router.push({ pathname: '/(main)/transfer/deposit/method', params: { amount: String(amount) } })}
      onCancel={() => router.back()}
    />
  );
}
