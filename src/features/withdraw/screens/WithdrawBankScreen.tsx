import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreditCard, Plus } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import Button from '@/components/Button/Button';

export type BankAccount = {
  id: string;
  name: string;
  last4: string;
};

const ACCOUNTS: BankAccount[] = [
  { id: '1', name: 'FNB', last4: '1234' },
];

type Props = {
  onBack: () => void;
  onNext: (account: BankAccount) => void;
  onCancel: () => void;
};

export default function WithdrawBankScreen({ onBack, onNext, onCancel }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <ScreenHeader onBack={onBack} />

      <View className="flex-1 px-6 pt-4">
        <Text className="text-xl font-bold text-gray-900 mb-6">
          Please confirm the bank account you want to deposit the funds to
        </Text>

        <View className="gap-3 mb-6">
          {ACCOUNTS.map(account => (
            <TouchableOpacity
              key={account.id}
              onPress={() => onNext(account)}
              activeOpacity={0.7}
              className="flex-row items-center gap-3 border border-gray-200 rounded-xl px-4 py-4"
            >
              <CreditCard size={18} color="#22d3ee" />
              <Text className="text-gray-900 font-medium">{account.name} {account.last4}...</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center gap-3 border border-gray-200 rounded-xl px-4 py-4"
          >
            <Plus size={18} color="#9CA3AF" />
            <Text className="text-gray-500">Add new debit/credit card</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-4 mt-auto mb-4">
          <View className="flex-1">
            <Button label="Next" onPress={() => ACCOUNTS[0] && onNext(ACCOUNTS[0])} />
          </View>
          <View className="flex-1">
            <Button label="Cancel" onPress={onCancel} variant="ghost" showArrow={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
