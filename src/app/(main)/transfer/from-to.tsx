import { router } from 'expo-router';
import TransferSelectScreen, { type WalletOption } from '@/features/transfer/screens/TransferSelectScreen';

export default function TransferFromToRoute() {
  return (
    <TransferSelectScreen
      onBack={() => router.back()}
      onNext={(from, to) =>
        router.push({
          pathname: '/(main)/transfer/transfer-details',
          params: {
            fromId: from.id,
            fromName: from.name,
            fromBalance: String(from.balance),
            toId: to.id,
            toName: to.name,
            toBalance: String(to.balance),
          },
        })
      }
      onCancel={() => router.back()}
    />
  );
}
