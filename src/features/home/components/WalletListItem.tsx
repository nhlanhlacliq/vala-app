import { getIcon } from '@/utils/getIcon';
import { Text, TouchableOpacity, View } from 'react-native';

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
      <View className="flex-row gap-3">
        <View className='-mt-1'>
          {getIcon("wallet", 18, "#9CA3AF")}
        </View>
        <View className='gap-1'>
          <Text className="leading-none">{wallet.name}</Text>
          <Text className="leading-none">R {wallet.balance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</Text>
        </View>
      </View>
      <View className='gap-1 opacity-50'>
        <Text className="leading-none">{"Target"}</Text>
        <Text className="leading-none">R {wallet.target ? wallet.target.toLocaleString('en-ZA', { minimumFractionDigits: 2 }) : '00.00'}</Text>
      </View>
    </TouchableOpacity>
  );
}
