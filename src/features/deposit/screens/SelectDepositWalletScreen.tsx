import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import type { ApiWallet } from '@/lib/api/wallets';
import { Wallet } from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  wallets: ApiWallet[];
  onBack: () => void;
  onNext: (wallet: ApiWallet) => void;
  onCancel: () => void;
};

export default function SelectDepositWalletScreen({ wallets, onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />
      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-4 pb-10" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          Which wallet are you depositing into?
        </Text>

        <View className="gap-3 mb-8">
          {wallets.map(wallet => (
            <TouchableOpacity
              key={wallet.walletId}
              onPress={() => onNext(wallet)}
              activeOpacity={0.7}
              className="bg-white flex-row items-center justify-between rounded-xl px-4 py-4"
            >
              <View className="flex-row items-center gap-3">
                <Wallet size={16} color="#9CA3AF" />
                <Text className="text-gray-900 font-medium">{wallet.name}</Text>
              </View>
              <Text className="text-gray-600">
                R {wallet.balance.amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button label="Cancel" className='ml-auto' onPress={onCancel} variant="ghost" showArrow={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
