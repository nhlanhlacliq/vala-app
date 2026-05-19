import Button from '@/components/Button/Button';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  amount: number;
  isLoading?: boolean;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

const VALA_FEE = 10;
const VAT_RATE = 0.15;

export default function PaymentDetailsScreen({ amount, isLoading = false, onBack, onNext, onCancel }: Props) {
  const vat = Math.round(VALA_FEE * VAT_RATE);
  const feeTotal = VALA_FEE + vat;
  const netAmount = amount - feeTotal;

  const rows: [string, string, boolean?][] = [
    ['Account number', '123 123 123 34'],
    ['Reference number', '00000'],
    ['Total payable', `R ${amount.toFixed(2)}`, true],
    ['VALA fee', `R ${VALA_FEE.toFixed(2)}`],
    [`VAT @${VAT_RATE * 100}%`, `R ${vat.toFixed(2)}`],
    ['Fee Total', `R ${feeTotal.toFixed(2)}`],
    ['Net amount transferred to wallet', `R ${netAmount.toFixed(2)}`],
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-2">
        <Text className="text-2xl mb-8">
          Payment Details
        </Text>

        <View className="gap-4 mb-10 bg-white p-4 py-6">
          {rows.map(([label, value, bold]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="flex-1">{label}</Text>
              <Text className={`font-bold`}>{value}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4 ml-auto">
            <Button label={isLoading ? 'Processing...' : 'Next'} onPress={onNext} disabled={isLoading} fullWidth={false}/>
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} fullWidth={false}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
