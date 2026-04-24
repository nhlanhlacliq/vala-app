import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, EyeOff, Eye } from 'lucide-react-native';
import ValaLogo from '@/components/ValaLogo/ValaLogo';
import SavingsCard from '../components/SavingsCard';
import WalletListItem, { type Wallet } from '../components/WalletListItem';
import Button from '@/components/Button/Button';

const MOCK_WALLETS: Wallet[] = [
  { id: '1', name: "Parent's house", balance: 3400 },
  { id: '2', name: "Kid's stationary", balance: 850 },
  { id: '3', name: 'Car maintenance', balance: 1890 },
];

const SAVINGS_TOTAL = MOCK_WALLETS.reduce((sum, w) => sum + w.balance, 0);

type Props = {
  userName?: string;
  onWalletPress: (wallet: Wallet) => void;
  onAddWallet: () => void;
};

export default function HomeScreen({ userName = 'John', onWalletPress, onAddWallet }: Props) {
  const [walletsHidden, setWalletsHidden] = useState(false);

  const wallets = MOCK_WALLETS;
  const hasWallets = wallets.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-32"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="items-center py-4">
          <ValaLogo size="sm" color="cyan" />
        </View>

        <View className="flex-row items-center justify-between mb-5">
          <Text className="text-lg font-semibold text-gray-900">Welcome, {userName}</Text>
          <TouchableOpacity hitSlop={8}>
            <Bell size={22} color="#111" />
          </TouchableOpacity>
        </View>

        <SavingsCard total={SAVINGS_TOTAL} />

        {/* My Wallets */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-semibold text-gray-900">My Wallets</Text>
          <TouchableOpacity onPress={() => setWalletsHidden(h => !h)} hitSlop={8}>
            {walletsHidden ? <Eye size={18} color="#9CA3AF" /> : <EyeOff size={18} color="#9CA3AF" />}
          </TouchableOpacity>
        </View>

        {!walletsHidden && (
          hasWallets ? (
            <View>
              {wallets.map(wallet => (
                <WalletListItem key={wallet.id} wallet={wallet} onPress={onWalletPress} />
              ))}
            </View>
          ) : (
            <View className="bg-white rounded-2xl border border-gray-200 px-5 py-8 mb-4">
              <Text className="text-gray-500 text-base text-center leading-6">
                Wallets are a way to categorise your savings. Create a new wallet and start saving.
              </Text>
            </View>
          )
        )}

        <View className="mt-4">
          <Button label="Add a wallet" onPress={onAddWallet} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
