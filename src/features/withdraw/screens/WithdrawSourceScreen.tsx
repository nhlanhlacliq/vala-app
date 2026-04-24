import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wallet, Landmark } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

export type WithdrawSource = {
  id: string;
  name: string;
  balance: number;
  type: 'wallet' | 'savings';
};

const SOURCES: WithdrawSource[] = [
  { id: 'savings', name: 'Savings account', balance: 6140, type: 'savings' },
  { id: '1', name: "Parent's house", balance: 3400, type: 'wallet' },
  { id: '2', name: "Kid's stationary", balance: 850, type: 'wallet' },
  { id: '3', name: 'Car maintenance', balance: 1890, type: 'wallet' },
  { id: '4', name: 'New Wheels', balance: 0, type: 'wallet' },
];

type Props = {
  onBack: () => void;
  onNext: (source: WithdrawSource) => void;
  onCancel: () => void;
};

export default function WithdrawSourceScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />
      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-4 pb-10" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-gray-900 mb-6">
          Please select where you are withdrawing from
        </Text>

        <View className="gap-3 mb-8">
          {SOURCES.map(source => (
            <TouchableOpacity
              key={source.id}
              onPress={() => onNext(source)}
              activeOpacity={0.7}
              className="flex-row items-center justify-between border border-gray-200 rounded-xl px-4 py-4"
            >
              <View className="flex-row items-center gap-3">
                {source.type === 'savings' ? (
                  <Landmark size={16} color="#9CA3AF" />
                ) : (
                  <Wallet size={16} color="#9CA3AF" />
                )}
                <Text className="text-gray-900 font-medium">{source.name}</Text>
              </View>
              <Text className="text-gray-600">R {source.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
