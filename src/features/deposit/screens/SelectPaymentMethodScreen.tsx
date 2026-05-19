import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { CreditCard } from 'lucide-react-native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InstantEFTLogo from '../../../../assets/logos/instantEFT-logo.svg';
import MastercardLogo from '../../../../assets/logos/Mastercard-logo.svg';
import VisaLogo from '../../../../assets/logos/visa-logo-3.svg';

export type Method = 'card' | 'eft' | 'third-party';

type Props = {
  onBack: () => void;
  onNext: (method: Method) => void;
  onCancel: () => void;
};

type Logo = { key: string; element: React.ReactNode };

type MethodOption = {
  id: Method;
  title: string;
  description?: string;
  logos: Logo[];
};

const METHODS: MethodOption[] = [
  {
    id: 'card',
    title: 'Debit/Credit card',
    logos: [
      { key: 'mastercard', element: <MastercardLogo width={34} height={20} /> },
      { key: 'visa', element: <VisaLogo width={44} height={20} /> },
    ],
  },
  {
    id: 'eft',
    title: 'Instant EFT',
    logos: [
      { key: 'ozow', element: <Image source={require('../../../../assets/logos/ozow-logo.png')} style={{ width: 72, height: 32 }} resizeMode="contain" /> },
      { key: 'instanteft', element: <InstantEFTLogo width={72} height={22} /> },
    ],
  },
  {
    id: 'third-party',
    title: 'Deposit at 3rd Party service provider',
    logos: [
      { key: 'checkers', element: <Image source={require('../../../../assets/logos/checkers-logo.png')} style={{ width: 48, height: 30 }} resizeMode="contain" /> },
      { key: 'shoprite', element: <Image source={require('../../../../assets/logos/shoprite-logo.png')} style={{ width: 56, height: 30 }} resizeMode="contain" /> },
      { key: 'pnp', element: <Image source={require('../../../../assets/logos/pnp-logo.png')} style={{ width: 40, height: 30 }} resizeMode="contain" /> },
      { key: 'boxer', element: <Image source={require('../../../../assets/logos/boxer-logo.png')} style={{ width: 48, height: 30 }} resizeMode="contain" /> },
    ],
    description:
      "To deposit at a 3rd party service provider, ensure you bring your South African National identity document (not a driver's licence) for identification purposes. You will be required to supply your ID number and account number.",
  },
];

export default function SelectPaymentMethodScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />
      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-4 pb-10" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl text-gray-900 mb-6">
          Select the method you want to add money with
        </Text>

        <View className="gap-4 mb-6">
          {METHODS.map(method => (
            <TouchableOpacity
              key={method.id}
              onPress={() => onNext(method.id)}
              activeOpacity={0.75}
              className="bg-white rounded-2xl px-4 py-5"
            >
              <View className="flex-row items-center gap-3 mb-3">
                <CreditCard size={18} color="#22d3ee" />
                <Text className="text-gray-900 font-semibold text-base">{method.title}</Text>
              </View>
              <View className="flex-row flex-wrap items-center gap-3 pl-7">
                {method.logos.map(logo => (
                  <View key={logo.key}>{logo.element}</View>
                ))}
              </View>
              {method.description && (
                <Text className="text-black/90 text-xs mt-3 leading-4">{method.description}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-sm mb-6">
          Payments are secure. Fees can be applicable depending on the service selected.
        </Text>

        <Button label="Cancel" className='ml-auto' onPress={onCancel} variant="ghost" showArrow={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
