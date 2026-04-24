import { router, useLocalSearchParams } from 'expo-router';
import TransferDetailsScreen from '@/features/transfer/screens/TransferDetailsScreen';

export default function TransferDetailsRoute() {
  const params = useLocalSearchParams<{
    fromId: string; fromName: string; fromBalance: string;
    toId: string; toName: string; toBalance: string;
  }>();

  const from = { id: params.fromId, name: params.fromName, balance: parseFloat(params.fromBalance ?? '0') };
  const to   = { id: params.toId,   name: params.toName,   balance: parseFloat(params.toBalance   ?? '0') };

  return (
    <TransferDetailsScreen
      from={from}
      to={to}
      onBack={() => router.back()}
      onNext={() => router.push('/(main)/transfer/transfer-confirmation')}
      onCancel={() => router.dismissTo('/(main)/home')}
    />
  );
}
