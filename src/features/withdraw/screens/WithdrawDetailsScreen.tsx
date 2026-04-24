import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';
import { type WithdrawSource } from './WithdrawSourceScreen';
import { type BankAccount } from './WithdrawBankScreen';

type Props = {
  source: WithdrawSource;
  amount: number;
  bank: BankAccount;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

export default function WithdrawDetailsScreen({ source, amount, bank, onBack, onNext, onCancel }: Props) {
  const date = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

  const rows: [string, string][] = [
    ['Withdrawal account/Wallet', source.name],
    ['Withdrawal amount', `R${amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`],
    ['Date', date],
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Withdrawal Details" />

      <View className="flex-1 px-6 pt-4">
        <View className="gap-5 mb-10">
          {rows.map(([label, value]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="text-gray-500 text-sm flex-1">{label}</Text>
              <Text className="text-gray-900 text-sm font-semibold">{value}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Button label="Next" onPress={onNext} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
