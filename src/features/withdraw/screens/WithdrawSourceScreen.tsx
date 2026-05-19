import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { getIcon } from '@/utils/getIcon';
import { Landmark } from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type WithdrawSource = {
  id: string;
  name: string;
  balance: number;
  type: 'wallet' | 'savings';
};

type Props = {
  sources: WithdrawSource[];
  onBack: () => void;
  onNext: (source: WithdrawSource) => void;
  onCancel: () => void;
};

export default function WithdrawSourceScreen({ sources, onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />
      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-4 pb-10" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl mb-6">
          Please select where you are withdrawing from
        </Text>

        <View className="gap-3 mb-8">
          {sources.map(source => (
            <TouchableOpacity
              key={source.id}
              onPress={() => onNext(source)}
              activeOpacity={0.7}
              className=" bg-white rounded-xl px-4 py-4"
              disabled={source.balance <= 0 || source.type === 'savings'}
            >
              <View className="flex-row items-center gap-3">
                <View className='mb-auto mt-1'>
                  {source.type === 'savings' ? (
                    <Landmark size={16} color="#9CA3AF" />
                  ) : (
                    <View>
                      {getIcon('wallet', 16, '#9CA3AF')}
                    </View>
                  )}
                </View>
                <View>
                  <Text className="text-gray-900 font-medium">{source.name}</Text>
               <Text className="">R {source.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} className='ml-auto' />
      </ScrollView>
    </SafeAreaView>
  );
}
