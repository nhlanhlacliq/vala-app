import { useState } from 'react';
import { router } from 'expo-router';
import HomeScreen from '@/features/home/screens/HomeScreen';
import QuickActionsSheet from '@/features/home/components/QuickActionsSheet';
import { type Wallet } from '@/features/home/components/WalletListItem';

export default function TransactRoute() {
  const [sheetOpen, setSheetOpen] = useState(true);

  return (
    <>
      <HomeScreen
        onWalletPress={(wallet: Wallet) => router.push(`/(main)/home/${wallet.id}`)}
        onAddWallet={() => router.push('/(main)/transfer/create-wallet/intro')}
      />
      <QuickActionsSheet
        visible={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onAddMoney={() => { setSheetOpen(false); router.push('/(main)/transfer/deposit/amount'); }}
        onAddWallet={() => { setSheetOpen(false); router.push('/(main)/transfer/create-wallet/intro'); }}
        onTransfer={() => { setSheetOpen(false); router.push('/(main)/transfer/from-to'); }}
        onWithdraw={() => { setSheetOpen(false); router.push('/(main)/transfer/withdraw/source'); }}
        canWithdraw
      />
    </>
  );
}
