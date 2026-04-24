import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

type Props = {
  amount: number;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
};

const VALA_FEE = 10;
const VAT_RATE = 0.15;

export default function PaymentDetailsScreen({ amount, onBack, onNext, onCancel }: Props) {
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
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} title="Payment Details" />

      <View className="flex-1 px-6 pt-2">
        <View className="gap-4 mb-10">
          {rows.map(([label, value, bold]) => (
            <View key={label} className="flex-row justify-between">
              <Text className="text-gray-500 text-sm flex-1">{label}</Text>
              <Text className={`text-sm ${bold ? 'font-bold text-gray-900' : 'text-gray-900'}`}>{value}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1">
            <Button label="Next" onPress={onNext} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
