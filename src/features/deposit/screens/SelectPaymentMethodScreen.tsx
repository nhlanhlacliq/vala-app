import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

export type Method = 'card' | 'eft' | 'third-party';

type Props = {
  onBack: () => void;
  onNext: (method: Method) => void;
  onCancel: () => void;
};

type LogoBadge = {
  label: string;
  bg: string;
  text: string;
};

type MethodOption = {
  id: Method;
  title: string;
  description?: string;
  logos: LogoBadge[];
};

const METHODS: MethodOption[] = [
  {
    id: 'card',
    title: 'Debit/Credit card',
    logos: [
      { label: 'MASTERCARD', bg: '#EB001B', text: '#fff' },
      { label: 'VISA', bg: '#1A1F71', text: '#fff' },
    ],
  },
  {
    id: 'eft',
    title: 'Instant EFT',
    logos: [
      { label: 'OZOW', bg: '#00C2CB', text: '#fff' },
      { label: 'instantEFT', bg: '#F5A623', text: '#fff' },
    ],
  },
  {
    id: 'third-party',
    title: 'Deposit at 3rd Party service provider',
    logos: [
      { label: 'Checkers', bg: '#E30613', text: '#fff' },
      { label: 'Shoprite', bg: '#E30613', text: '#fff' },
      { label: 'PnP', bg: '#007A3D', text: '#fff' },
      { label: 'Boxer', bg: '#FF6600', text: '#fff' },
    ],
    description:
      "To deposit at a 3rd party service provider, ensure you bring your South African National identity document (not a driver's licence) for identification purposes. You will be required to supply your ID number and account number.",
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
              <View className="flex-row items-center gap-3 mb-3">
                <CreditCard size={18} color="#22d3ee" />
                <Text className="text-gray-900 font-semibold text-base">{method.title}</Text>
              </View>
              <View className="flex-row flex-wrap gap-2 pl-7">
                {method.logos.map(logo => (
                  <View
                    key={logo.label}
                    className="rounded px-3 py-1"
                    style={{ backgroundColor: logo.bg }}
                  >
                    <Text className="text-xs font-bold" style={{ color: logo.text }}>
                      {logo.label}
                    </Text>
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
