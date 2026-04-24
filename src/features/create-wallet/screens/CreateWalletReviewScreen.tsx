import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';
import { type WalletGoal } from './CreateWalletGoalScreen';

type Props = {
  goal: WalletGoal;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

export default function CreateWalletReviewScreen({ goal, onBack, onNext, onCancel }: Props) {
  const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

  const rows: [string, string][] = [
    ['Savings goal', goal.savingsGoal],
    ['Target amount', `R${goal.targetAmount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`],
    ['Wallet name', goal.walletName],
    ['Date', today],
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="VALA Wallet Details" />

      <View className="flex-1 px-6 pt-4">
        <View className="gap-5 mb-10">
          {rows.map(([label, value]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="text-gray-500 text-sm">{label}</Text>
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
