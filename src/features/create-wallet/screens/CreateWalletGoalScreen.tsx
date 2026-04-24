import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

export type WalletGoal = {
  savingsGoal: string;
  targetAmount: number;
  walletName: string;
};

type Props = {
  onBack: () => void;
  onNext: (goal: WalletGoal) => void;
  onCancel: () => void;
};

const SAVINGS_GOALS = [
  'Car Purchase Deposit',
  'Holiday',
  'Education',
  'Emergency Fund',
  'Home Deposit',
  'Other',
];

export default function CreateWalletGoalScreen({ onBack, onNext, onCancel }: Props) {
  const [savingsGoal, setSavingsGoal] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [walletName, setWalletName] = useState('');

  const parsed = parseFloat(targetAmount);
  const canProceed = savingsGoal && !isNaN(parsed) && parsed > 0 && walletName.trim();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl font-bold text-gray-900 mb-8">Choose a savings goal</Text>

        <View className="gap-6 mb-10">
          <View>
            <Text className="text-gray-700 font-medium mb-2">What are you saving towards?</Text>
            <Input
              placeholder="Choose savings goal"
              value={savingsGoal}
              onChangeText={setSavingsGoal}
              autoCapitalize="words"
            />
          </View>

          <View>
            <Text className="text-gray-700 font-medium mb-2">What is your savings target amount?</Text>
            <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5">
              <Text className="text-gray-400 text-base mr-2">R</Text>
              <TextInput
                className="flex-1 text-base text-gray-900"
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                value={targetAmount}
                onChangeText={setTargetAmount}
                keyboardType="decimal-pad"
              />
            </View>
          </View>

          <View>
            <Text className="text-gray-700 font-medium mb-2">Choose a name for your new VALA wallet</Text>
            <Input
              placeholder="Complete"
              value={walletName}
              onChangeText={setWalletName}
              autoCapitalize="words"
            />
          </View>
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Button label="Next" onPress={() => onNext({ savingsGoal, targetAmount: parsed, walletName })} disabled={!canProceed} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
