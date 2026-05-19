import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { type WalletOption } from './TransferSelectScreen';

type Props = {
  from: WalletOption;
  to: WalletOption;
  amount: number;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

export default function TransferDetailsScreen({ from, to, amount, onBack, onNext, onCancel }: Props) {
  const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl mb-6">
          Transfer Details
        </Text>

        <View className="gap-4 mb-8 bg-white rounded-xl p-6">
          {[
            ['From Wallet', from.name],
            ['To Wallet', to.name],
            ['Amount', `R ${amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`],
            ['Date', today],
          ].map(([label, value]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="">{label}</Text>
              <Text className="font-semibold">{value}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4 ml-auto">
            <Button label="Next" onPress={onNext} className='gap-4' fullWidth={false} />
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} fullWidth={false} />
        </View>
      </View>
    </SafeAreaView>
  );
}
