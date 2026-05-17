import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  total: number;
  accountNumber?: string;
};

export default function SavingsCard({ total, accountNumber = '123 123 123 34' }: Props) {
  const [hidden, setHidden] = useState(false);

  return (
    <View className="mb-6 gap-2">
      <View className="flex-row items-center justify-between mb-1">
        <Text className="text-[22px] leading-[28px]">Savings Total</Text>
        <TouchableOpacity onPress={() => setHidden(h => !h)} hitSlop={8}>
          {hidden ? <Eye size={18} color="#9CA3AF" /> : <EyeOff size={18} color="#9CA3AF" />}
        </TouchableOpacity>
      </View>
      {/* <Text className="text-gray-400 text-sm mb-3">Account {accountNumber}</Text> */}

      <View className="bg-white rounded-2xl border border-gray-200 px-5 py-5">
        <Text className="text-4xl font-bold ">
          {hidden ? '••••••' : `R${total.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`}
        </Text>
      </View>
    </View>
  );
}
