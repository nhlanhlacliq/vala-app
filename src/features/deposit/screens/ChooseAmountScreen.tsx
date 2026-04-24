import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

type Props = {
  onBack: () => void;
  onNext: (amount: number) => void;
  onCancel: () => void;
};

export default function ChooseAmountScreen({ onBack, onNext, onCancel }: Props) {
  const [amount, setAmount] = useState('');

  const parsed = parseFloat(amount);
  const isValid = !isNaN(parsed) && parsed > 0;

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl font-bold text-gray-900 mb-8">
          Choose the amount you would like to add
        </Text>

        <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5 mb-8">
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

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Button label="Next" onPress={() => onNext(parsed)} disabled={!isValid} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
