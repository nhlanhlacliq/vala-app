import { TouchableOpacity, Text, View } from 'react-native';
import { Wallet as WalletIcon } from 'lucide-react-native';

export type Wallet = {
  id: string;
  name: string;
  balance: number;
};

type Props = {
  wallet: Wallet;
  onPress: (wallet: Wallet) => void;
};

export default function WalletListItem({ wallet, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={() => onPress(wallet)}
      activeOpacity={0.7}
      className="flex-row items-center justify-between bg-white rounded-xl px-4 py-4 mb-3 border border-gray-100"
    >
      <View className="flex-row items-center gap-3">
        <WalletIcon size={18} color="#9CA3AF" />
        <Text className="text-gray-900 text-base font-medium">{wallet.name}</Text>
      </View>
      <Text className="text-gray-700 text-base">R {wallet.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
    </TouchableOpacity>
  );
}
