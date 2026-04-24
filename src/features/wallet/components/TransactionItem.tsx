import { View, Text } from 'react-native';
import { ArrowDownLeft } from 'lucide-react-native';

export type Transaction = {
  id: string;
  source: string;
  type: 'Deposit' | 'Withdrawal' | 'Transfer';
  amount: number;
  date: string;
};

type Props = {
  transaction: Transaction;
};

export default function TransactionItem({ transaction }: Props) {
  const isCredit = transaction.type === 'Deposit';
  const amountLabel = `${isCredit ? '+ ' : '- '}R ${Math.abs(transaction.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;

  return (
    <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
      <View className="flex-row items-center gap-3">
        <View className="w-8 h-8 rounded-full bg-cyan-50 items-center justify-center">
          <ArrowDownLeft size={16} color="#22d3ee" />
        </View>
        <View>
          <Text className="text-gray-900 text-sm font-medium">{transaction.source}</Text>
          <Text className="text-gray-400 text-xs">{transaction.type}</Text>
        </View>
      </View>
      <Text className={`text-sm font-semibold ${isCredit ? 'text-cyan-500' : 'text-red-400'}`}>
        {amountLabel}
      </Text>
    </View>
  );
}
