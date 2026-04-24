import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

type Method = 'card' | 'eft' | 'third-party';

type Props = {
  onBack: () => void;
  onNext: (method: Method) => void;
  onCancel: () => void;
};

type MethodOption = {
  id: Method;
  title: string;
  description?: string;
  logos: string[];
};

const METHODS: MethodOption[] = [
  {
    id: 'card',
    title: 'Debit/Credit card',
    logos: ['Mastercard', 'VISA'],
  },
  {
    id: 'eft',
    title: 'Instant EFT',
    logos: ['OZOW', 'instantEFT by Payflex'],
  },
  {
    id: 'third-party',
    title: 'Deposit at 3rd Party service provider',
    logos: ['Checkers', 'Shoprite', 'PnP', 'Boxer'],
    description:
      'To deposit at a 3rd party service provider, ensure you bring your South African National identity document (not a driver\'s licence) for identification purposes.',
  },
];

export default function SelectPaymentMethodScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />
      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-4 pb-10" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          Select the method you want to add money with
        </Text>

        <View className="gap-4 mb-6">
          {METHODS.map(method => (
            <TouchableOpacity
              key={method.id}
              onPress={() => onNext(method.id)}
              activeOpacity={0.75}
              className="border border-gray-200 rounded-2xl px-4 py-5"
            >
              <View className="flex-row items-center gap-3 mb-2">
                <CreditCard size={18} color="#22d3ee" />
                <Text className="text-gray-900 font-semibold text-base">{method.title}</Text>
              </View>
              <View className="flex-row flex-wrap gap-2 pl-7">
                {method.logos.map(logo => (
                  <View key={logo} className="bg-gray-100 rounded px-2 py-1">
                    <Text className="text-gray-600 text-xs font-medium">{logo}</Text>
                  </View>
                ))}
              </View>
              {method.description && (
                <Text className="text-gray-400 text-xs mt-3 pl-7 leading-4">{method.description}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-gray-400 text-xs text-center mb-6">
          Payments are secure. Fees can be applicable depending on the service selected.
        </Text>

        <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
