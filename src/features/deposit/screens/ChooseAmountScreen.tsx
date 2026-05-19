import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView className="flex-1 " edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-2xl text-gray-900 mb-4">
          Choose the amount you would like to add
        </Text>

        <View className="flex-row items-center border border-gray-300 rounded-md px-4 mb-8">
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

        <View className="flex-row gap-4 justify-end">
            <Button label="Next" onPress={() => onNext(parsed)} disabled={!isValid} fullWidth={false} />
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} fullWidth={false}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
