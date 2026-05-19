import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { type WithdrawSource } from './WithdrawSourceScreen';

type Props = {
  source: WithdrawSource;
  onBack: () => void;
  onNext: (amount: number) => void;
  onCancel: () => void;
};

export default function WithdrawAmountScreen({ source, onBack, onNext, onCancel }: Props) {
  const [amount, setAmount] = useState('');

  const parsed = parseFloat(amount);
  const isValid = !isNaN(parsed) && parsed > 0 && parsed <= source.balance;

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl mb-2">
          Please select the amount you are withdrawing from{' '}
          <Text className="font-bold">{source.name}</Text>
        </Text>
        <Text className="text-gray-400 text-sm mb-8">
          Available: R {source.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
        </Text>

        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 mb-8">
          <Text className="text-gray-400 text-base mr-2">R</Text>
          <TextInput
            className="flex-1 text-base text-gray-900"
            placeholder="0.00"
            placeholderTextColor="#9CA3AF"
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
          />
        </View>

        <View className="flex-row gap-4 ml-auto">
            <Button label="Next" onPress={() => onNext(parsed)} disabled={!isValid} className='gap-6'/>
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
        </View>
      </View>
    </SafeAreaView>
  );
}
