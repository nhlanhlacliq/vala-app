import { router } from 'expo-router';
import TransferSelectScreen, { type WalletOption } from '@/features/transfer/screens/TransferSelectScreen';
import { useWallets } from '@/hooks/api/useWallets';
import { useUser } from '@/store/userStore';

export default function TransferFromToRoute() {
  const { userId } = useUser();
  const { data } = useWallets(userId);

  const wallets: WalletOption[] = (data ?? []).map(w => ({
    id: w.walletId,
    name: w.name,
    balance: w.balance.amount,
  }));

  return (
    <TransferSelectScreen
      wallets={wallets}
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
