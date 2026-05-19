import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { type WalletGoal } from './CreateWalletGoalScreen';

type Props = {
  goal: WalletGoal;
  isLoading?: boolean;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

export default function CreateWalletReviewScreen({ goal, isLoading = false, onBack, onNext, onCancel }: Props) {
  const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

  const rows: [string, string][] = [
    ['Savings goal', goal.savingsGoal],
    ['Target amount', `R${goal.targetAmount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`],
    ['Wallet name', goal.walletName],
    ['Date', today],
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl mb-10">
          VALA Wallet Details
        </Text>
        <View className="gap-5 mb-10 bg-white p-5">
          {rows.map(([label, value]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="">{label}</Text>
              <Text className="font-semibold">{value}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4 ml-auto">
            <Button label={isLoading ? 'Creating...' : 'Next'} onPress={onNext} disabled={isLoading} className='gap-6'/>
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
        </View>
      </View>
    </SafeAreaView>
  );
}
